import os
import sys
import json
import asyncio
import logging
from contextlib import asynccontextmanager
from typing import Optional

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import FileResponse
from pydantic import BaseModel
import uvicorn

from TikTokLive import TikTokLiveClient
from TikTokLive.events import (
    GiftEvent,
    ConnectEvent,
    DisconnectEvent,
    CommentEvent,
    LikeEvent,
    FollowEvent,
    ShareEvent
)

# Configuración de codificación segura para terminal de Windows
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

# Configuración de logs con formato legible
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%H:%M:%S"
)

def normalize_username(raw: str) -> str:
    """Extrae el unique_id limpio incluso si ingresan tiktok.com/@vortex_rival o @vortex_rival"""
    raw = raw.strip()
    if "tiktok.com/@" in raw:
        raw = raw.split("tiktok.com/@")[-1].split("/")[0].split("?")[0]
    return raw.lstrip("@").strip()

# Usuario objetivo de TikTok Live por defecto: @vortex_rival
DEFAULT_USER = "vortex_rival"
RAW_USER = os.getenv("TIKTOK_USER", DEFAULT_USER)

for arg in sys.argv[1:]:
    if arg.startswith("--user="):
        RAW_USER = arg.split("=", 1)[1]
    elif arg.startswith("@") or "tiktok.com" in arg:
        RAW_USER = arg

TIKTOK_USERNAME = normalize_username(RAW_USER)

# Lista de los 4 países
FACTION_LIST = ["usa", "uk", "mexico", "brazil"]
USER_FACTION_CACHE = {}

# Filtro estricto de moderación para cumplir con las Normas de la Comunidad de TikTok
PROFANITY_LIST = [
    "nazi", "hitler", "racista", "odio", "muerte", "matar", "violacion",
    "fuck", "shit", "bitch", "nigger", "nigga", "cunt", "paki", "whore",
    "puta", "puto", "maricon", "mierda", "imbecil", "maldito",
    "mono", "simio", "terrorista", "asesino"
]

def is_comment_clean(text: str) -> bool:
    """Verifica si el comentario cumple con las políticas comunitarias de TikTok."""
    lower_text = text.lower().strip()
    cleaned_text = "".join(c for c in lower_text if c.isalnum() or c.isspace())
    for word in PROFANITY_LIST:
        if word in lower_text or word in cleaned_text:
            return False
    return True

# Clientes WebSocket activos (OBS Browser Source / Ventanas Web)
CONNECTED_CLIENTS: set[WebSocket] = set()

def assign_faction(username: str, comment_text: str = "") -> str:
    """Asigna país: primero por comando en el comentario, luego por caché o hash."""
    clean_user = username.lstrip("@").lower()
    text = comment_text.lower().strip()

    # Selección explícita por palabra clave / token
    tokens = set(text.split())
    if any(k in tokens for k in ["1", "usa", "us", "america", "blue", "azul"]) or "usa" in text or "estados unidos" in text:
        USER_FACTION_CACHE[clean_user] = "usa"
        return "usa"
    if any(k in tokens for k in ["2", "uk", "britain", "england", "red", "rojo"]) or "uk" in text or "reino unido" in text or "inglaterra" in text:
        USER_FACTION_CACHE[clean_user] = "uk"
        return "uk"
    if any(k in tokens for k in ["3", "mexico", "mex", "mx", "green", "verde"]) or "mexico" in text or "méxico" in text:
        USER_FACTION_CACHE[clean_user] = "mexico"
        return "mexico"
    if any(k in tokens for k in ["4", "brazil", "brasil", "br", "yellow", "gold", "amarillo"]) or "brazil" in text or "brasil" in text:
        USER_FACTION_CACHE[clean_user] = "brazil"
        return "brazil"

    # Si ya tiene país guardado
    if clean_user in USER_FACTION_CACHE:
        return USER_FACTION_CACHE[clean_user]

    # Asignación determinista por suma ASCII si no ha elegido
    hash_val = sum(ord(c) for c in clean_user)
    assigned = FACTION_LIST[hash_val % len(FACTION_LIST)]
    USER_FACTION_CACHE[clean_user] = assigned
    return assigned

async def broadcast_event(payload: dict):
    """Envía el evento a todas las instancias de OBS y navegadores conectados."""
    if not CONNECTED_CLIENTS:
        return
    message = json.dumps(payload)
    disconnected = set()
    for ws in list(CONNECTED_CLIENTS):
        try:
            await ws.send_text(message)
        except Exception:
            disconnected.add(ws)

    for ws in disconnected:
        if ws in CONNECTED_CLIENTS:
            CONNECTED_CLIENTS.remove(ws)

# Cliente de TikTokLive
tiktok_client: Optional[TikTokLiveClient] = None

def setup_tiktok_client():
    global tiktok_client
    if not TIKTOK_USERNAME:
        logging.info("[TIKTOK] No se especificó usuario de TikTok. El servidor funciona en MODO SIMULADOR / LOCAL.")
        return None

    client = TikTokLiveClient(unique_id=TIKTOK_USERNAME)

    @client.on(ConnectEvent)
    async def on_connect(event: ConnectEvent):
        logging.info(f"[TIKTOK] ¡CONECTADO EXITOSAMENTE AL EN VIVO DE @{TIKTOK_USERNAME}!")
        logging.info("[TIKTOK] Escuchando regalos, likes y comentarios en vivo.")

    @client.on(DisconnectEvent)
    async def on_disconnect(event: DisconnectEvent):
        logging.warning(f"[TIKTOK] Desconectado del directo de @{TIKTOK_USERNAME}.")

    @client.on(GiftEvent)
    async def on_gift(event: GiftEvent):
        if event.gift.streakable and not event.gift.streaking:
            return

        username = event.user.nickname or event.user.unique_id
        gift_name = event.gift.name
        diamonds = event.gift.diamond_count or 1
        faction = assign_faction(username)

        logging.info(f"[GIFT] {username} envió {gift_name} ({diamonds} 💎) -> {faction.upper()}")
        payload = {
            "type": "gift",
            "user": f"@{username}",
            "gift_name": gift_name,
            "diamonds": diamonds,
            "team": faction
        }
        await broadcast_event(payload)

    @client.on(CommentEvent)
    async def on_comment(event: CommentEvent):
        comment = event.comment

        # Filtro estricto de moderación para evitar suspensión del Live
        if not is_comment_clean(comment):
            logging.warning(f"[MODERACIÓN] Mensaje bloqueado por filtro de seguridad: '{comment}'")
            return

        username = event.user.nickname or event.user.unique_id
        faction = assign_faction(username, comment)

        logging.info(f"[CHAT] {username}: {comment} -> {faction.upper()}")
        payload = {
            "type": "comment",
            "user": f"@{username}",
            "comment": comment,
            "team": faction
        }
        await broadcast_event(payload)

    @client.on(LikeEvent)
    async def on_like(event: LikeEvent):
        username = event.user.nickname or event.user.unique_id
        count = event.count or 1
        faction = assign_faction(username)

        payload = {
            "type": "like",
            "user": f"@{username}",
            "count": count,
            "team": faction
        }
        await broadcast_event(payload)

    @client.on(FollowEvent)
    async def on_follow(event: FollowEvent):
        username = event.user.nickname or event.user.unique_id
        faction = assign_faction(username)
        logging.info(f"[FOLLOW] Nuevo seguidor: {username}! Refuerzo para {faction.upper()}")
        payload = {
            "type": "comment",
            "user": f"@{username}",
            "comment": "New follower!",
            "team": faction
        }
        await broadcast_event(payload)

    @client.on(ShareEvent)
    async def on_share(event: ShareEvent):
        username = event.user.nickname or event.user.unique_id
        faction = assign_faction(username)
        logging.info(f"[SHARE] ¡{username} compartió el directo!")
        payload = {
            "type": "like",
            "user": f"@{username}",
            "count": 5,
            "team": faction
        }
        await broadcast_event(payload)

    return client

async def run_tiktok_listener():
    """Ejecuta el listener de TikTok de manera resiliente sin detener el servidor."""
    global tiktok_client

    while True:
        try:
            if not tiktok_client or not tiktok_client.connected:
                tiktok_client = setup_tiktok_client()
                if not tiktok_client:
                    await asyncio.sleep(10)
                    continue
                logging.info(f"[TIKTOK] Conectando a la transmisión en vivo de @{TIKTOK_USERNAME} (tiktok.com/@{TIKTOK_USERNAME})...")
                await tiktok_client.start()
            else:
                await asyncio.sleep(5)
        except asyncio.CancelledError:
            break
        except Exception as err:
            logging.warning(
                f"[TIKTOK] @{TIKTOK_USERNAME} reconexión necesaria ({err}). "
                "El servidor y simulador continúan activos. Reintentando en 10s automáticamente..."
            )
            if tiktok_client:
                try:
                    await tiktok_client.disconnect()
                except Exception:
                    pass
                tiktok_client = None
            await asyncio.sleep(10)

# Ciclo de vida de FastAPI
@asynccontextmanager
async def lifespan(app: FastAPI):
    tiktok_task = asyncio.create_task(run_tiktok_listener())
    yield
    tiktok_task.cancel()
    if tiktok_client and tiktok_client.connected:
        try:
            await tiktok_client.disconnect()
        except Exception:
            pass

app = FastAPI(title="TikTok Live Territory Conquest Bridge", lifespan=lifespan)

# Endpoint WebSocket para OBS, clientes web y panel de control
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    CONNECTED_CLIENTS.add(websocket)
    logging.info(f"[WS] Cliente conectado. Activos: {len(CONNECTED_CLIENTS)}")
    try:
        while True:
            data = await websocket.receive_text()
            try:
                parsed = json.loads(data)
                await broadcast_event(parsed)
            except Exception:
                pass
    except WebSocketDisconnect:
        pass
    finally:
        if websocket in CONNECTED_CLIENTS:
            CONNECTED_CLIENTS.remove(websocket)
        logging.info(f"[WS] Cliente desconectado. Activos: {len(CONNECTED_CLIENTS)}")

# Modelo para simulación HTTP
class SimEvent(BaseModel):
    type: str  # 'gift', 'comment', 'like', 'control'
    team: Optional[str] = "usa"
    user: Optional[str] = "@tester"
    diamonds: Optional[int] = 1
    gift_name: Optional[str] = "Rose"
    count: Optional[int] = 1
    comment: Optional[str] = "1"
    action: Optional[str] = None
    value: Optional[str] = None

@app.post("/api/simulate")
async def simulate_endpoint(event: SimEvent):
    payload = event.model_dump()
    await broadcast_event(payload)
    return {"status": "ok", "dispatched": payload}

# Servir archivos estáticos del juego (HTML, CSS, JS, Control)
@app.get("/")
async def get_index():
    return FileResponse("index.html")

@app.get("/styles.css")
async def get_css():
    return FileResponse("styles.css")

@app.get("/game.js")
async def get_js():
    return FileResponse("game.js")

@app.get("/control")
@app.get("/admin")
async def get_control():
    return FileResponse("control.html")

def main():
    port = int(os.getenv("PORT", "8080"))
    print("\n" + "="*60)
    print(">> WORLD FLAG CHAMPIONSHIP - TIKTOK LIVE BRIDGE SERVER")
    print("="*60)
    print(f"[*] Servidor Web y Juego:  http://localhost:{port}/")
    print(f"[*] WebSocket para OBS:    ws://localhost:{port}/ws")
    print(f"[*] Control Remoto Web:    http://localhost:{port}/control")
    print(f"[*] Streamer configurado:  @{TIKTOK_USERNAME} (tiktok.com/@{TIKTOK_USERNAME})")
    print("="*60 + "\n")
    uvicorn.run(app, host="0.0.0.0", port=port, log_level="info")

if __name__ == "__main__":
    main()