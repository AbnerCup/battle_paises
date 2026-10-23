/**
 * WORLD FLAG CHAMPIONSHIP - COUNTRY CUP 2026
 * MULTILINGUAL ENGINE (DEFAULT: ENGLISH FOR US/GLOBAL AUDIENCE)
 */

// --- I18N LOCALIZATION DICTIONARY ---
let currentLang = "en";

const I18N = {
  en: {
    title: "🏆 WORLD FLAG CHAMPIONSHIP",
    cmdUsa: "1 or usa",
    cmdUk: "2 or uk",
    cmdMex: "3 or mexico",
    cmdBr: "4 or brazil",
    victoryTitle: (flag, name) => `🏆 ${flag} ${name.toUpperCase()} CHAMPION!`,
    victorySub: "Has won the World Flag Championship!",
    nextRound: (sec) => `Next round in ${sec}s...`,
    sentGift: (name, count) => `Sent ${name} (+${count} 💎)!`,
    activatedGift: (flag, user, gift, diam) => `${flag} ${user} ACTIVATED: ${gift.toUpperCase()} (${diam} 💎)`,
    soundOn: "🔊 Sound: ON",
    soundOff: "🔇 Sound: OFF",
    chatGuide: "Pick flag (1, 2, 3, 4)",
    tapsGuide: "Score & expand",
    giftsGuide: "Super Power Shots!",
    skirmishBadge: "⚔️ LIVE SKIRMISH",
    audienceBadge: "🔥 AUDIENCE ACTIVE",
    ctas: [
      { icon: "💬", badge: "CHAT", text: "Comment 1, 2, 3 or 4 to spawn runner troops!" },
      { icon: "❤️", badge: "TAPS", text: "Double-tap the screen to push your flag's frontier!" },
      { icon: "🌹", badge: "ROSE", text: "Send a Rose (1💎) to drop a tactical Bomb!" },
      { icon: "🕶️", badge: "SHADES", text: "Send Sunglasses (100💎) for ANIME CUT-IN POWER!" },
      { icon: "🏆", badge: "GOAL", text: "Capture 65% territory to win the Country Cup!" }
    ]
  },
  es: {
    title: "🏆 WORLD FLAG CHAMPIONSHIP",
    cmdUsa: "1 ó usa",
    cmdUk: "2 ó uk",
    cmdMex: "3 ó mexico",
    cmdBr: "4 ó brasil",
    victoryTitle: (flag, name) => `🏆 ${flag} ${name.toUpperCase()} CAMPEÓN!`,
    victorySub: "¡Ha ganado el World Flag Championship!",
    nextRound: (sec) => `Siguiente ronda en ${sec}s...`,
    sentGift: (name, count) => `¡Envió ${name} (+${count} 💎)!`,
    activatedGift: (flag, user, gift, diam) => `${flag} ${user} ACTIVÓ: ${gift.toUpperCase()} (${diam} 💎)`,
    soundOn: "🔊 Sonido: ON",
    soundOff: "🔇 Sonido: OFF",
    chatGuide: "Apoya tu bandera (1, 2, 3, 4)",
    tapsGuide: "Suma puntos",
    giftsGuide: "¡Super Tiros Especiales!",
    skirmishBadge: "⚔️ COMBATE EN VIVO",
    audienceBadge: "🔥 AUDIENCIA ACTIVA",
    ctas: [
      { icon: "💬", badge: "CHAT", text: "¡Comenta 1, 2, 3 ó 4 para enviar tropas al mapa!" },
      { icon: "❤️", badge: "TAPS", text: "¡Toca la pantalla repetidamente para avanzar tu frontera!" },
      { icon: "🌹", badge: "ROSA", text: "¡Envía una Rosa (1💎) para lanzar una Bomba!" },
      { icon: "🕶️", badge: "GAFAS", text: "¡Envía Gafas (100💎) para PODER ANIME ESPECIAL!" },
      { icon: "🏆", badge: "META", text: "¡Conquista el 65% del mapa para ganar la Copa!" }
    ]
  }
};

// --- COUNTRY CONFIGURATION ---
const TEAMS = {
  usa: {
    name: "USA",
    flag: "🇺🇸",
    color: "#104fdf",         // Official Old Glory Blue
    colorGlow: "rgba(16, 79, 223, 0.85)",
    baseX: 0,
    baseY: 0,
    element: "pct-usa",
    barElement: "bar-usa",
    themeClass: "cutin-theme-usa",
    sfx: "BOOOM!",
    quotes: {
      en: {
        med: "“CHAMPION STAR POWER!”",
        high: "“FREEDOM SUPER SHOT!”",
        mega: "“SUPREME USA STAR BURST!”"
      },
      es: {
        med: "“¡IMPULSO ESTELAR DE CAMPEÓN!”",
        high: "“¡SUPER TIRO DE LIBERTAD!”",
        mega: "“¡PODER SUPREMO ESTELAR USA!”"
      }
    }
  },
  uk: {
    name: "UK",
    flag: "🇬🇧",
    color: "#d90429",         // Royal Union Jack Red
    colorGlow: "rgba(217, 4, 41, 0.85)",
    baseX: 1,
    baseY: 0,
    element: "pct-uk",
    barElement: "bar-uk",
    themeClass: "cutin-theme-uk",
    sfx: "SLASHHH!",
    quotes: {
      en: {
        med: "“ROYAL CROWN STRIKE!”",
        high: "“BRITISH PALADIN SUPER SHOT!”",
        mega: "“EXCALIBUR GOLDEN BLASTER!”"
      },
      es: {
        med: "“¡TIRO DE LA CORONA REAL!”",
        high: "“¡SUPER TIRO PALADÍN BRITÁNICO!”",
        mega: "“¡TIRO SUPREMO EXCALIBUR DE ORO!”"
      }
    }
  },
  mexico: {
    name: "Mexico",
    flag: "🇲🇽",
    color: "#008751",         // Mexican Official Green
    colorGlow: "rgba(0, 135, 81, 0.85)",
    baseX: 0,
    baseY: 1,
    element: "pct-mexico",
    barElement: "bar-mexico",
    themeClass: "cutin-theme-mexico",
    sfx: "SMASH!",
    quotes: {
      en: {
        med: "“GOLDEN EAGLE POWER!”",
        high: "“AZTEC SUN SUPER SHOT!”",
        mega: "“SUPREME QUETZALCOATL BURST!”"
      },
      es: {
        med: "“¡PODER DEL ÁGUILA DORADA!”",
        high: "“¡TIRO ESPECIAL SOL AZTECA!”",
        mega: "“¡TIRO SUPREMO QUETZALCÓATL!”"
      }
    }
  },
  brazil: {
    name: "Brazil",
    flag: "🇧🇷",
    color: "#ffb703",         // Canarinha Gold
    colorGlow: "rgba(255, 183, 3, 0.85)",
    baseX: 1,
    baseY: 1,
    element: "pct-brazil",
    barElement: "bar-brazil",
    themeClass: "cutin-theme-brazil",
    sfx: "KABOOOM!",
    quotes: {
      en: {
        med: "“CANARINHA SAMBA MAGIC!”",
        high: "“AMAZON SOLAR SUPER SHOT!”",
        mega: "“CANARINHA 1000% SUPERNOVA!”"
      },
      es: {
        med: "“¡MAGIA SAMBA CANARINHA!”",
        high: "“¡SUPER TIRO SOLAR DEL AMAZONAS!”",
        mega: "“¡SUPER NOVA CANARINHA 1000%!”"
      }
    }
  }
};

const TEAM_KEYS = ["usa", "uk", "mexico", "brazil"];

// --- MAP & CANVAS DIMENSIONS ---
const COLS = 26;
const ROWS = 38;
let grid = [];
let totalCells = COLS * ROWS;

const canvas = document.getElementById("battle-canvas");
const ctx = canvas.getContext("2d");

// Game State
let troops = [];
let projectiles = [];
let particles = [];
let shockwaves = [];
let floatingTexts = [];
let confettis = [];

let roundTime = 180;
let isGameOver = false;
let screenShake = 0;
let soundEnabled = true;

// Web Audio API Synth
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

// --- SYNTHESIZED SOUNDS ---
function playPopSound() {
  if (!soundEnabled) return;
  try {
    const actx = getAudioContext();
    if (!actx) return;
    const osc = actx.createOscillator();
    const gain = actx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(500, actx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(170, actx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.15, actx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, actx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(actx.destination);
    osc.start();
    osc.stop(actx.currentTime + 0.1);
  } catch (e) {}
}

function playTapSound() {
  if (!soundEnabled) return;
  try {
    const actx = getAudioContext();
    if (!actx) return;
    const osc = actx.createOscillator();
    const gain = actx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(650, actx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(320, actx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.12, actx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, actx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(actx.destination);
    osc.start();
    osc.stop(actx.currentTime + 0.08);
  } catch (e) {}
}

function playExplosionSound(power = 1) {
  if (!soundEnabled) return;
  try {
    const actx = getAudioContext();
    if (!actx) return;
    const bufferSize = actx.sampleRate * 0.45;
    const buffer = actx.createBuffer(1, bufferSize, actx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = actx.createBufferSource();
    noise.buffer = buffer;

    const filter = actx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(900 * power, actx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(50, actx.currentTime + 0.4);

    const gain = actx.createGain();
    gain.gain.setValueAtTime(Math.min(0.35 * power, 0.7), actx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, actx.currentTime + 0.4);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(actx.destination);

    noise.start();
    noise.stop(actx.currentTime + 0.45);
  } catch (e) {}
}

function playAnimeCutInSound() {
  if (!soundEnabled) return;
  try {
    const actx = getAudioContext();
    if (!actx) return;

    const sweepOsc = actx.createOscillator();
    const sweepGain = actx.createGain();
    sweepOsc.type = "sawtooth";
    sweepOsc.frequency.setValueAtTime(180, actx.currentTime);
    sweepOsc.frequency.exponentialRampToValueAtTime(1400, actx.currentTime + 0.25);
    sweepGain.gain.setValueAtTime(0.2, actx.currentTime);
    sweepGain.gain.exponentialRampToValueAtTime(0.01, actx.currentTime + 0.3);
    sweepOsc.connect(sweepGain);
    sweepGain.connect(actx.destination);
    sweepOsc.start(actx.currentTime);
    sweepOsc.stop(actx.currentTime + 0.3);

    const hitOsc = actx.createOscillator();
    const hitGain = actx.createGain();
    hitOsc.type = "sine";
    hitOsc.frequency.setValueAtTime(320, actx.currentTime + 0.1);
    hitOsc.frequency.exponentialRampToValueAtTime(45, actx.currentTime + 0.5);
    hitGain.gain.setValueAtTime(0.4, actx.currentTime + 0.1);
    hitGain.gain.exponentialRampToValueAtTime(0.01, actx.currentTime + 0.5);
    hitOsc.connect(hitGain);
    hitGain.connect(actx.destination);
    hitOsc.start(actx.currentTime + 0.1);
    hitOsc.stop(actx.currentTime + 0.55);
  } catch (e) {}
}

function playVictoryFanfare() {
  if (!soundEnabled) return;
  try {
    const actx = getAudioContext();
    if (!actx) return;
    const notes = [261.63, 329.63, 392.00, 523.25];
    notes.forEach((freq, idx) => {
      const osc = actx.createOscillator();
      const gain = actx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, actx.currentTime + idx * 0.12);
      gain.gain.setValueAtTime(0.2, actx.currentTime + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.01, actx.currentTime + idx * 0.12 + 0.4);
      osc.connect(gain);
      gain.connect(actx.destination);
      osc.start(actx.currentTime + idx * 0.12);
      osc.stop(actx.currentTime + idx * 0.12 + 0.45);
    });
  } catch (e) {}
}

// --- OFFICIAL NATIONAL FLAG RENDERING INSIDE BASE CIRCLES ---
function drawCountryFlagCircle(ctx, teamKey, bx, by, radius) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(bx, by, radius, 0, Math.PI * 2);
  ctx.clip();

  if (teamKey === "usa") {
    // 🇺🇸 USA: Stripes & Blue canton with stars
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(bx - radius, by - radius, radius * 2, radius * 2);
    const stripeH = (radius * 2) / 13;
    ctx.fillStyle = "#b22234";
    for (let i = 0; i < 13; i += 2) {
      ctx.fillRect(bx - radius, by - radius + i * stripeH, radius * 2, stripeH);
    }
    ctx.fillStyle = "#3c3b6e";
    ctx.fillRect(bx - radius, by - radius, radius * 1.05, stripeH * 7);
    ctx.fillStyle = "#ffffff";
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 5; c++) {
        ctx.beginPath();
        ctx.arc(bx - radius + 6 + c * 6, by - radius + 5 + r * 5, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  } else if (teamKey === "uk") {
    // 🇬🇧 UK: Union Jack
    ctx.fillStyle = "#012169";
    ctx.fillRect(bx - radius, by - radius, radius * 2, radius * 2);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = radius * 0.42;
    ctx.beginPath();
    ctx.moveTo(bx - radius, by - radius); ctx.lineTo(bx + radius, by + radius);
    ctx.moveTo(bx - radius, by + radius); ctx.lineTo(bx + radius, by - radius);
    ctx.stroke();
    ctx.strokeStyle = "#c8102e";
    ctx.lineWidth = radius * 0.2;
    ctx.stroke();
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(bx - radius * 0.32, by - radius, radius * 0.64, radius * 2);
    ctx.fillRect(bx - radius, by - radius * 0.32, radius * 2, radius * 0.64);
    ctx.fillStyle = "#c8102e";
    ctx.fillRect(bx - radius * 0.18, by - radius, radius * 0.36, radius * 2);
    ctx.fillRect(bx - radius, by - radius * 0.18, radius * 2, radius * 0.36);
  } else if (teamKey === "mexico") {
    // 🇲🇽 MEXICO: Tricolor Green, White, Red
    const third = (radius * 2) / 3;
    ctx.fillStyle = "#006847";
    ctx.fillRect(bx - radius, by - radius, third, radius * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(bx - radius + third, by - radius, third, radius * 2);
    ctx.fillStyle = "#ce1126";
    ctx.fillRect(bx - radius + third * 2, by - radius, third, radius * 2);
    ctx.fillStyle = "#996515";
    ctx.beginPath();
    ctx.arc(bx, by, radius * 0.22, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#006847";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  } else if (teamKey === "brazil") {
    // 🇧🇷 BRAZIL: Green field, Yellow rhombus, Blue circle
    ctx.fillStyle = "#009739";
    ctx.fillRect(bx - radius, by - radius, radius * 2, radius * 2);
    ctx.fillStyle = "#fed100";
    ctx.beginPath();
    ctx.moveTo(bx, by - radius * 0.78);
    ctx.lineTo(bx + radius * 0.88, by);
    ctx.lineTo(bx, by + radius * 0.78);
    ctx.lineTo(bx - radius * 0.88, by);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#012169";
    ctx.beginPath();
    ctx.arc(bx, by, radius * 0.44, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.arc(bx, by + radius * 0.38, radius * 0.48, -Math.PI * 0.75, -Math.PI * 0.25);
    ctx.stroke();
  }

  ctx.restore();

  // Outer Glowing Circle
  ctx.save();
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 3.5;
  ctx.shadowColor = TEAMS[teamKey].color;
  ctx.shadowBlur = 18;
  ctx.beginPath();
  ctx.arc(bx, by, radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

// --- VECTOR ANIME HERO ART (SVG) ---
function getHeroArtSVG(team) {
  switch (team) {
    case "usa":
      return `
        <svg viewBox="0 0 300 240" class="hero-svg-art" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="usaAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="40%" stop-color="#4da3ff"/>
              <stop offset="100%" stop-color="#104fdf" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="150" cy="120" r="110" fill="url(#usaAura)" opacity="0.8"/>
          <path d="M150 30 L175 90 L240 85 L190 125 L210 185 L150 145 L90 185 L110 125 L60 85 L125 90 Z" fill="#ffffff" stroke="#104fdf" stroke-width="4"/>
          <polygon points="120,70 180,70 170,85 130,85" fill="#00e5ff" stroke="#ffffff" stroke-width="2"/>
          <path d="M40 70 L110 110 M260 70 L190 110 M150 145 L150 220" stroke="#ff4d6d" stroke-width="5" stroke-linecap="round"/>
          <text x="150" y="225" font-family="Impact" font-size="24" fill="#ffffff" text-anchor="middle" stroke="#000" stroke-width="1">USA CHAMPION</text>
        </svg>
      `;
    case "uk":
      return `
        <svg viewBox="0 0 300 240" class="hero-svg-art" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="ukAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="45%" stop-color="#ff4d6d"/>
              <stop offset="100%" stop-color="#d90429" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="150" cy="120" r="110" fill="url(#ukAura)" opacity="0.8"/>
          <path d="M100 80 L125 45 L150 75 L175 45 L200 80 L190 135 L110 135 Z" fill="#ffd700" stroke="#ffffff" stroke-width="3"/>
          <line x1="150" y1="20" x2="150" y2="210" stroke="#ffffff" stroke-width="6"/>
          <line x1="110" y1="70" x2="190" y2="70" stroke="#ffd700" stroke-width="8"/>
          <polygon points="150,20 135,50 165,50" fill="#d90429"/>
          <text x="150" y="225" font-family="Impact" font-size="24" fill="#ffffff" text-anchor="middle" stroke="#000" stroke-width="1">ROYAL PALADIN</text>
        </svg>
      `;
    case "mexico":
      return `
        <svg viewBox="0 0 300 240" class="hero-svg-art" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="mexAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="45%" stop-color="#00ff88"/>
              <stop offset="100%" stop-color="#008751" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="150" cy="120" r="110" fill="url(#mexAura)" opacity="0.8"/>
          <path d="M70 120 C70 40 230 40 230 120 L210 170 L150 195 L90 170 Z" fill="#008751" stroke="#ffd700" stroke-width="4"/>
          <path d="M150 20 L130 60 M150 20 L170 60 M100 40 L120 70 M200 40 L180 70" stroke="#00ff88" stroke-width="5" stroke-linecap="round"/>
          <circle cx="125" cy="110" r="14" fill="#ff2a5f"/>
          <circle cx="175" cy="110" r="14" fill="#ff2a5f"/>
          <polygon points="150,120 135,155 165,155" fill="#ffd700"/>
          <text x="150" y="225" font-family="Impact" font-size="24" fill="#ffffff" text-anchor="middle" stroke="#000" stroke-width="1">GOLDEN EAGLE</text>
        </svg>
      `;
    case "brazil":
      return `
        <svg viewBox="0 0 300 240" class="hero-svg-art" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="brAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ffffff"/>
              <stop offset="45%" stop-color="#ffe600"/>
              <stop offset="100%" stop-color="#ffb703" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="150" cy="120" r="110" fill="url(#brAura)" opacity="0.85"/>
          <polygon points="150,30 220,110 150,185 80,110" fill="#ffb703" stroke="#008751" stroke-width="4"/>
          <circle cx="120" cy="105" r="12" fill="#00e5ff"/>
          <circle cx="180" cy="105" r="12" fill="#00e5ff"/>
          <polygon points="110,135 125,160 135,135" fill="#ffffff"/>
          <polygon points="190,135 175,160 165,135" fill="#ffffff"/>
          <path d="M50 40 L90 80 M250 40 L210 80 M150 185 L150 215" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
          <text x="150" y="225" font-family="Impact" font-size="24" fill="#ffffff" text-anchor="middle" stroke="#000" stroke-width="1">SAMBA GOLD</text>
        </svg>
      `;
  }
  return "";
}

function getEyesCloseUpSVG(team) {
  const t = TEAMS[team];
  return `
    <svg viewBox="0 0 400 120" style="width:100%; height:100%;" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="120" fill="${t.color}"/>
      <line x1="0" y1="30" x2="400" y2="40" stroke="#ffffff" stroke-width="2" opacity="0.5"/>
      <line x1="0" y1="90" x2="400" y2="80" stroke="#ffffff" stroke-width="2" opacity="0.5"/>
      <polygon points="90,45 170,55 160,70 100,65" fill="#ffffff" stroke="#000" stroke-width="3"/>
      <circle cx="135" cy="58" r="6" fill="#000"/>
      <polygon points="310,45 230,55 240,70 300,65" fill="#ffffff" stroke="#000" stroke-width="3"/>
      <circle cx="265" cy="58" r="6" fill="#000"/>
      <path d="M175 45 L190 65 L200 45 L210 65 L225 45" stroke="#000" stroke-width="3" fill="none"/>
    </svg>
  `;
}

// --- ANIME POWER CUT-IN TRIGGER ---
const cutinOverlay = document.getElementById("anime-cutin-overlay");
const cutinFlash = document.getElementById("cutin-flash");
const cutinTopArt = document.getElementById("cutin-top-art");
const cutinHeroArt = document.getElementById("cutin-hero-art");
const cutinQuote = document.getElementById("cutin-quote");
const cutinSubquote = document.getElementById("cutin-subquote");
const cutinSfx = document.getElementById("cutin-sfx");
const cutinPanelMain = document.getElementById("cutin-panel-main");

let cutinActiveTimeout = null;

function triggerAnimeCutIn(teamKey, giftName, diamonds, username) {
  const t = TEAMS[teamKey] || TEAMS.usa;
  const langPack = I18N[currentLang] || I18N.en;
  const quotesPack = t.quotes[currentLang] || t.quotes.en;

  playAnimeCutInSound();

  let quote = quotesPack.med;
  if (diamonds >= 500) quote = quotesPack.mega;
  else if (diamonds >= 100) quote = quotesPack.high;

  cutinTopArt.innerHTML = getEyesCloseUpSVG(teamKey);
  cutinHeroArt.innerHTML = getHeroArtSVG(teamKey);
  cutinQuote.innerText = quote;
  cutinQuote.style.color = t.color;
  cutinSubquote.innerText = langPack.activatedGift(t.flag, username, giftName, diamonds);
  cutinSfx.innerText = t.sfx;

  cutinPanelMain.className = `cutin-panel-main ${t.themeClass}`;

  cutinFlash.classList.remove("flash-now");
  void cutinFlash.offsetWidth;
  cutinFlash.classList.add("flash-now");

  cutinOverlay.classList.add("active");

  clearTimeout(cutinActiveTimeout);
  cutinActiveTimeout = setTimeout(() => {
    cutinOverlay.classList.remove("active");
  }, 1450);
}

function testAnimeCard(team) {
  getAudioContext();
  const testUsers = { usa: "@fan_usa", uk: "@fan_uk", mexico: "@fan_mexico", brazil: "@fan_brasil" };
  const testGifts = ["Sunglasses", "Donut", "Dragon", "Galaxy"];
  const gift = testGifts[Math.floor(Math.random() * testGifts.length)];
  const diamonds = gift === "Dragon" || gift === "Galaxy" ? 500 : 100;
  triggerAnimeCutIn(team, gift, diamonds, testUsers[team] || "@streamer");
}

// --- LANGUAGE SWITCHER ---
function setLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  const p = I18N[lang];

  // Update footer guide labels
  const chatGuideEl = document.getElementById("guide-chat-text");
  const tapsGuideEl = document.getElementById("guide-taps-text");
  const giftsGuideEl = document.getElementById("guide-gifts-text");
  if (chatGuideEl) chatGuideEl.innerText = p.chatGuide;
  if (tapsGuideEl) tapsGuideEl.innerText = p.tapsGuide;
  if (giftsGuideEl) giftsGuideEl.innerText = p.giftsGuide;

  const btnSound = document.getElementById("btn-toggle-sound");
  if (btnSound) {
    btnSound.innerText = soundEnabled ? p.soundOn : p.soundOff;
  }

  // Update UI language buttons in simulator
  const btnEn = document.getElementById("btn-lang-en");
  const btnEs = document.getElementById("btn-lang-es");
  if (btnEn && btnEs) {
    if (lang === "en") {
      btnEn.style.borderColor = "#104fdf";
      btnEn.style.fontWeight = "900";
      btnEn.innerText = "🇺🇸 English (Active)";
      btnEs.style.borderColor = "rgba(255,255,255,0.15)";
      btnEs.style.fontWeight = "600";
      btnEs.innerText = "🇪🇸 Español";
    } else {
      btnEs.style.borderColor = "#008751";
      btnEs.style.fontWeight = "900";
      btnEs.innerText = "🇪🇸 Español (Activo)";
      btnEn.style.borderColor = "rgba(255,255,255,0.15)";
      btnEn.style.fontWeight = "600";
      btnEn.innerText = "🇺🇸 English";
    }
  }

  updateModeBadge(Date.now() - lastRealInteractionTime < IDLE_COOLDOWN_MS);
  updateLiveTicker();
}

// --- GRID INITIALIZATION ---
function initGrid() {
  grid = [];
  const midX = COLS / 2;
  const midY = ROWS / 2;

  for (let r = 0; r < ROWS; r++) {
    const row = [];
    for (let c = 0; c < COLS; c++) {
      let team = "usa";
      if (c >= midX && r < midY) team = "uk";
      else if (c < midX && r >= midY) team = "mexico";
      else if (c >= midX && r >= midY) team = "brazil";

      row.push({
        team: team,
        flash: 0
      });
    }
    grid.push(row);
  }
}

function adjustViewportScale() {
  const container = document.getElementById("stream-container");
  if (!container) return;

  const targetW = 1080;
  const targetH = 1920;
  const winW = window.innerWidth;
  const winH = window.innerHeight;

  // Si la pantalla es menor a 1080x1920 (ej: celular o monitor de laptop), escala para que encaje 100%
  const scale = Math.min(winW / targetW, winH / targetH);
  if (scale < 0.999) {
    container.style.transform = `scale(${scale})`;
    container.style.transformOrigin = "center center";
  } else {
    container.style.transform = "none";
  }
}

function resizeCanvas() {
  // Asegura resolución completa 1080p sin distorsión
  canvas.width = canvas.clientWidth || 1040;
  canvas.height = canvas.clientHeight || 1400;
}

window.addEventListener("resize", () => {
  adjustViewportScale();
  resizeCanvas();
});

window.addEventListener("orientationchange", () => {
  adjustViewportScale();
  resizeCanvas();
});

function updateTerritoryStats() {
  const counts = { usa: 0, uk: 0, mexico: 0, brazil: 0 };
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (counts[grid[r][c].team] !== undefined) {
        counts[grid[r][c].team]++;
      }
    }
  }

  let leadingTeam = null;
  let maxCount = -1;

  TEAM_KEYS.forEach(k => {
    const pct = Math.round((counts[k] / totalCells) * 100);
    const elem = document.getElementById(TEAMS[k].element);
    const barElem = document.getElementById(TEAMS[k].barElement);
    if (elem) elem.innerText = `${pct}%`;
    if (barElem) barElem.style.width = `${(counts[k] / totalCells) * 100}%`;

    if (counts[k] > maxCount) {
      maxCount = counts[k];
      leadingTeam = k;
    }

    if (pct >= 65 && !isGameOver) {
      triggerVictory(k);
    }
  });

  return leadingTeam;
}

function conquerCell(r, c, newTeam) {
  if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return false;
  if (grid[r][c].team === newTeam) return false;

  grid[r][c].team = newTeam;
  grid[r][c].flash = 1.0;
  return true;
}

function conquerRadius(centerR, centerC, radius, newTeam) {
  let conqueredCount = 0;
  for (let r = centerR - radius; r <= centerR + radius; r++) {
    for (let c = centerC - radius; c <= centerC + radius; c++) {
      if (r >= 0 && r < ROWS && c >= 0 && c < COLS) {
        const dist = Math.hypot(r - centerR, c - centerC);
        if (dist <= radius) {
          if (conquerCell(r, c, newTeam)) {
            conqueredCount++;
          }
        }
      }
    }
  }
  updateTerritoryStats();
  return conqueredCount;
}

function expandFrontier(team, count = 1) {
  const frontierCells = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c].team !== team) {
        const hasAllyNeighbor =
          (r > 0 && grid[r - 1][c].team === team) ||
          (r < ROWS - 1 && grid[r + 1][c].team === team) ||
          (c > 0 && grid[r][c - 1].team === team) ||
          (c < COLS - 1 && grid[r][c + 1].team === team);

        if (hasAllyNeighbor) {
          frontierCells.push({ r, c });
        }
      }
    }
  }

  if (frontierCells.length === 0) return;

  for (let i = 0; i < count; i++) {
    const pick = frontierCells[Math.floor(Math.random() * frontierCells.length)];
    if (pick) {
      conquerCell(pick.r, pick.c, team);
      createShockwave(pick.c, pick.r, 12, TEAMS[team].color);
      playTapSound();
    }
  }
  updateTerritoryStats();
}

function spawnTroop(team, username) {
  const base = TEAMS[team];
  const startX = base.baseX === 0 ? 1 : COLS - 2;
  const startY = base.baseY === 0 ? 1 : ROWS - 2;

  const targetX = Math.floor(Math.random() * COLS);
  const targetY = Math.floor(Math.random() * ROWS);

  troops.push({
    x: startX,
    y: startY,
    targetX: targetX,
    targetY: targetY,
    team: team,
    username: username || `@${team}`,
    speed: 0.14,
    life: 1.0
  });

  playPopSound();
  floatingTexts.push({
    text: `+1 ${base.flag} ${base.name}`,
    x: (startX / COLS) * canvas.width,
    y: (startY / ROWS) * canvas.height,
    color: base.color,
    alpha: 1.0
  });
}

function launchProjectile(team, diamonds, giftName, username) {
  if (diamonds >= 30) {
    triggerAnimeCutIn(team, giftName, diamonds, username);
  }

  let radius = 2.5;
  let power = 1;

  if (diamonds >= 500) {
    radius = 9;
    power = 3;
    screenShake = 25;
  } else if (diamonds >= 100) {
    radius = 6;
    power = 2;
    screenShake = 16;
  } else if (diamonds >= 30) {
    radius = 4;
    power = 1.5;
    screenShake = 9;
  } else {
    radius = 2.5;
    power = 1;
    screenShake = 4;
    showAlertBanner(username, I18N[currentLang].sentGift(giftName, diamonds), team);
  }

  let targetR = Math.floor(Math.random() * ROWS);
  let targetC = Math.floor(Math.random() * COLS);

  const startCanvasX = Math.random() * canvas.width;
  const startCanvasY = -50;

  const targetCanvasX = ((targetC + 0.5) / COLS) * canvas.width;
  const targetCanvasY = ((targetR + 0.5) / ROWS) * canvas.height;

  projectiles.push({
    x: startCanvasX,
    y: startCanvasY,
    targetX: targetCanvasX,
    targetY: targetCanvasY,
    gridR: targetR,
    gridC: targetC,
    radius: radius,
    power: power,
    team: team,
    color: TEAMS[team].color,
    progress: 0,
    speed: 0.04
  });
}

const alertBanner = document.getElementById("alert-banner");
const alertUser = document.getElementById("alert-user");
const alertDesc = document.getElementById("alert-desc");
let alertTimeout = null;

function showAlertBanner(user, desc, team) {
  alertUser.innerText = `${TEAMS[team]?.flag || "⭐"} ${user}`;
  alertUser.style.color = TEAMS[team]?.color || "#fff";
  alertDesc.innerText = desc;
  alertBanner.style.borderColor = TEAMS[team]?.color || "#ffde59";
  alertBanner.classList.add("show");

  clearTimeout(alertTimeout);
  alertTimeout = setTimeout(() => {
    alertBanner.classList.remove("show");
  }, 2800);
}

function createShockwave(col, row, maxRadius, color) {
  const x = ((col + 0.5) / COLS) * canvas.width;
  const y = ((row + 0.5) / ROWS) * canvas.height;
  shockwaves.push({
    x, y,
    radius: 4,
    maxRadius,
    alpha: 0.9,
    color
  });
}

function createImpactParticles(x, y, color, count = 25) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 5 + 2;
    particles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: Math.random() * 4 + 2,
      alpha: 1.0,
      color: color
    });
  }
}

// --- VICTORY OVERLAY ---
const victoryOverlay = document.getElementById("victory-overlay");
const victoryTitle = document.getElementById("victory-team-text");
const victorySub = document.getElementById("victory-team-sub");
const restartCountEl = document.getElementById("restart-countdown");

function triggerVictory(winnerKey) {
  isGameOver = true;
  const winner = TEAMS[winnerKey];
  const langPack = I18N[currentLang] || I18N.en;

  victoryTitle.innerText = langPack.victoryTitle(winner.flag, winner.name);
  victoryTitle.style.color = winner.color;
  victorySub.innerText = langPack.victorySub;
  victoryOverlay.classList.add("show");

  playVictoryFanfare();

  for (let i = 0; i < 150; i++) {
    confettis.push({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 200,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 4 + 3,
      size: Math.random() * 8 + 4,
      color: TEAM_KEYS[Math.floor(Math.random() * TEAM_KEYS.length)],
      angle: Math.random() * 360
    });
  }

  let secondsLeft = 10;
  const interval = setInterval(() => {
    secondsLeft--;
    restartCountEl.innerText = langPack.nextRound(secondsLeft);
    if (secondsLeft <= 0) {
      clearInterval(interval);
      resetMatch();
    }
  }, 1000);
}

function resetMatch() {
  initGrid();
  troops = [];
  projectiles = [];
  particles = [];
  shockwaves = [];
  confettis = [];
  floatingTexts = [];
  isGameOver = false;
  roundTime = 180;
  victoryOverlay.classList.remove("show");
  updateTerritoryStats();
}

setInterval(() => {
  if (isGameOver) return;
  roundTime--;
  if (roundTime <= 0) {
    const leader = updateTerritoryStats();
    triggerVictory(leader || "usa");
    return;
  }
  const mins = String(Math.floor(roundTime / 60)).padStart(2, "0");
  const secs = String(roundTime % 60).padStart(2, "0");
  document.getElementById("round-timer").innerText = `${mins}:${secs}`;
}, 1000);

// --- MAIN GAME LOOP (60 FPS) ---
function gameLoop() {
  requestAnimationFrame(gameLoop);

  let offsetX = 0;
  let offsetY = 0;
  if (screenShake > 0) {
    offsetX = (Math.random() - 0.5) * screenShake;
    offsetY = (Math.random() - 0.5) * screenShake;
    screenShake *= 0.88;
    if (screenShake < 0.5) screenShake = 0;
  }

  ctx.save();
  ctx.translate(offsetX, offsetY);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const cellW = canvas.width / COLS;
  const cellH = canvas.height / ROWS;

  // 1. Grid Cells
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const cell = grid[r][c];
      const team = TEAMS[cell.team] || TEAMS.usa;
      const x = c * cellW;
      const y = r * cellH;

      ctx.fillStyle = team.color;
      ctx.globalAlpha = 0.88 + (cell.flash * 0.12);
      ctx.fillRect(x + 0.5, y + 0.5, cellW - 1, cellH - 1);

      if (cell.flash > 0) {
        ctx.fillStyle = "#ffffff";
        ctx.globalAlpha = cell.flash * 0.55;
        ctx.fillRect(x + 0.5, y + 0.5, cellW - 1, cellH - 1);
        cell.flash -= 0.03;
        if (cell.flash < 0) cell.flash = 0;
      }
    }
  }
  ctx.globalAlpha = 1.0;

  // 2. Base Circles with Official Vector Flags
  TEAM_KEYS.forEach(k => {
    const b = TEAMS[k];
    const bx = b.baseX === 0 ? cellW * 1.8 : canvas.width - cellW * 1.8;
    const by = b.baseY === 0 ? cellH * 1.8 : canvas.height - cellH * 1.8;
    const radius = Math.min(cellW, cellH) * 1.7;

    drawCountryFlagCircle(ctx, k, bx, by, radius);
  });

  // 3. Fans / Troops
  for (let i = troops.length - 1; i >= 0; i--) {
    const t = troops[i];
    const dx = t.targetX - t.x;
    const dy = t.targetY - t.y;
    const dist = Math.hypot(dx, dy);

    if (dist < 0.5 || isGameOver) {
      conquerCell(Math.floor(t.y), Math.floor(t.x), t.team);
      troops.splice(i, 1);
      updateTerritoryStats();
      continue;
    }

    t.x += (dx / dist) * t.speed;
    t.y += (dy / dist) * t.speed;

    const curR = Math.floor(t.y);
    const curC = Math.floor(t.x);
    if (curR >= 0 && curR < ROWS && curC >= 0 && curC < COLS) {
      if (grid[curR][curC].team !== t.team) {
        conquerCell(curR, curC, t.team);
      }
    }

    const troopCanvasX = (t.x / COLS) * canvas.width;
    const troopCanvasY = (t.y / ROWS) * canvas.height;

    ctx.save();
    const teamObj = TEAMS[t.team] || TEAMS.usa;
    ctx.fillStyle = teamObj.color;
    ctx.shadowColor = teamObj.color;
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(troopCanvasX, troopCanvasY, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 9px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`${teamObj.flag} ${t.username}`, troopCanvasX, troopCanvasY - 9);
    ctx.restore();
  }

  // 4. Projectiles
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const p = projectiles[i];
    p.progress += p.speed;

    const curX = p.x + (p.targetX - p.x) * p.progress;
    const curY = p.y + (p.targetY - p.y) * p.progress;

    ctx.save();
    ctx.strokeStyle = p.color;
    ctx.lineWidth = 4 * p.power;
    ctx.shadowColor = p.color;
    ctx.shadowBlur = 20;
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(curX, curY);
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(curX, curY, 6 * p.power, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    if (p.progress >= 1.0) {
      playExplosionSound(p.power);
      createImpactParticles(p.targetX, p.targetY, p.color, 35 * p.power);
      createShockwave(p.gridC, p.gridR, 40 * p.power, p.color);
      conquerRadius(p.gridR, p.gridC, Math.round(p.radius), p.team);
      projectiles.splice(i, 1);
    }
  }

  // 5. Shockwaves
  for (let i = shockwaves.length - 1; i >= 0; i--) {
    const sw = shockwaves[i];
    sw.radius += 3;
    sw.alpha -= 0.04;
    if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
      shockwaves.splice(i, 1);
      continue;
    }
    ctx.save();
    ctx.strokeStyle = sw.color;
    ctx.lineWidth = 3;
    ctx.globalAlpha = sw.alpha;
    ctx.beginPath();
    ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  // 6. Particles
  for (let i = particles.length - 1; i >= 0; i--) {
    const pt = particles[i];
    pt.x += pt.vx;
    pt.y += pt.vy;
    pt.vy += 0.15;
    pt.alpha -= 0.03;
    if (pt.alpha <= 0) {
      particles.splice(i, 1);
      continue;
    }
    ctx.save();
    ctx.fillStyle = pt.color;
    ctx.globalAlpha = pt.alpha;
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // 7. Floating Texts
  for (let i = floatingTexts.length - 1; i >= 0; i--) {
    const ft = floatingTexts[i];
    ft.y -= 0.8;
    ft.alpha -= 0.02;
    if (ft.alpha <= 0) {
      floatingTexts.splice(i, 1);
      continue;
    }
    ctx.save();
    ctx.fillStyle = ft.color;
    ctx.globalAlpha = ft.alpha;
    ctx.font = "bold 11px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(ft.text, ft.x, ft.y);
    ctx.restore();
  }

  // 8. Confetti
  for (let i = confettis.length - 1; i >= 0; i--) {
    const c = confettis[i];
    c.x += c.vx;
    c.y += c.vy;
    c.angle += 3;
    if (c.y > canvas.height + 20) {
      c.y = -10;
    }
    ctx.save();
    ctx.fillStyle = TEAMS[c.color]?.color || "#ffffff";
    ctx.translate(c.x, c.y);
    ctx.rotate((c.angle * Math.PI) / 180);
    ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
    ctx.restore();
  }

  ctx.restore();
}

// --- WEBSOCKET CONNECTION ---
let socket = null;
let reconnectTimer = null;

function connectWebSocket() {
  const wsProtocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  const wsHost = window.location.host || "localhost:8080";
  const wsUrl = `${wsProtocol}//${wsHost}/ws`;
  console.log(`[WS] Connecting to ${wsUrl}...`);

  socket = new WebSocket(wsUrl);

  socket.onopen = () => {
    console.log("[WS] Connected to live bridge server!");
  };

  socket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      handleIncomingEvent(data);
    } catch (err) {
      console.error("[WS] Error parsing message:", err);
    }
  };

  socket.onclose = () => {
    console.warn("[WS] Reconnecting in 3s...");
    clearTimeout(reconnectTimer);
    reconnectTimer = setTimeout(connectWebSocket, 3000);
  };

  socket.onerror = (err) => {
    console.error("[WS] Socket error:", err);
    socket.close();
  };
}

// --- EVENT HANDLER ---
function handleIncomingEvent(data) {
  if (data.type === "control") {
    if (data.action === "toggle_ambient") {
      toggleAmbientMode(data.value);
    } else if (data.action === "set_pace") {
      ambientIntensity = data.value;
      const btn = document.getElementById("btn-ambient-pace");
      if (btn) btn.innerText = `⚡ Pace: ${ambientIntensity}`;
    } else if (data.action === "reset_match") {
      resetMatch();
    } else if (data.action === "toggle_panel") {
      toggleTestPanel(data.value);
    } else if (data.action === "toggle_sound") {
      soundEnabled = !soundEnabled;
      const btnSound = document.getElementById("btn-toggle-sound");
      if (btnSound) btnSound.innerText = soundEnabled ? I18N[currentLang].soundOn : I18N[currentLang].soundOff;
    }
    return;
  }

  if (isGameOver) return;
  registerRealAudienceInteraction();

  const team = data.team || "usa";
  const user = data.user || "@viewer";

  switch (data.type) {
    case "gift":
      launchProjectile(team, data.diamonds || 1, data.gift_name || "Gift", user);
      break;
    case "comment":
      spawnTroop(team, user);
      break;
    case "like":
      expandFrontier(team, data.count || 1);
      break;
  }
}

// --- TESTING & SIMULATION CONTROLS ---
function simulateEvent(type, team, value = 1) {
  getAudioContext();
  registerRealAudienceInteraction();
  const randomUsers = ["@alex_us", "@ryan_ny", "@streamer99", "@tiktok_fan", "@dark_rider"];
  const randomUser = randomUsers[Math.floor(Math.random() * randomUsers.length)];

  if (type === "like") {
    expandFrontier(team, value);
  } else if (type === "comment") {
    spawnTroop(team, randomUser);
  }
}

function simulateRandomGift(diamonds, name) {
  getAudioContext();
  registerRealAudienceInteraction();
  const randomTeam = TEAM_KEYS[Math.floor(Math.random() * TEAM_KEYS.length)];
  const randomUsers = ["@pro_donor", "@vip_fan", "@tiktok_king", "@mega_sponsor"];
  const user = randomUsers[Math.floor(Math.random() * randomUsers.length)];
  launchProjectile(randomTeam, diamonds, name, user);
}

// =========================================================
// --- AUTO-SKIRMISH / DINAMISMO RANDOM ENGINE (IDLE MODE) --
// =========================================================
let ambientModeEnabled = true;
let ambientIntensity = "normal"; // "relaxed", "normal", "intense"
let lastRealInteractionTime = 0;
const IDLE_COOLDOWN_MS = 8500; // 8.5 seconds quiet after real viewer action before ambient resumes

const AMBIENT_BOT_USERS = [
  "@speedy_rival", "@cup_striker", "@flag_legend", "@tiktok_ace",
  "@territory_pro", "@blaze_runner", "@pixel_storm", "@rival_fan",
  "@eagle_scout", "@azteca_power", "@samba_king", "@uk_crusader",
  "@vortex_scout", "@arena_pilot", "@hyper_fan", "@storm_conqueror"
];

let ctaIndex = 0;
let liveModeBadgeEl = null;
let tickerIconEl = null;
let tickerBadgeEl = null;
let tickerTextEl = null;

function updateLiveTicker() {
  if (!tickerTextEl) {
    tickerIconEl = document.getElementById("ticker-icon");
    tickerBadgeEl = document.getElementById("ticker-badge");
    tickerTextEl = document.getElementById("ticker-text");
  }
  if (!tickerTextEl) return;

  const pack = I18N[currentLang] || I18N.en;
  const ctas = pack.ctas || [];
  if (ctas.length === 0) return;

  ctaIndex = (ctaIndex + 1) % ctas.length;
  const nextCta = ctas[ctaIndex];

  tickerTextEl.classList.add("fade-out");
  setTimeout(() => {
    if (tickerIconEl) tickerIconEl.innerText = nextCta.icon;
    if (tickerBadgeEl) tickerBadgeEl.innerText = nextCta.badge;
    if (tickerTextEl) {
      tickerTextEl.innerText = nextCta.text;
      tickerTextEl.classList.remove("fade-out");
    }
  }, 280);
}

function updateModeBadge(isLiveAudience) {
  if (!liveModeBadgeEl) liveModeBadgeEl = document.getElementById("live-mode-badge");
  if (!liveModeBadgeEl) return;

  const pack = I18N[currentLang] || I18N.en;
  if (isLiveAudience) {
    liveModeBadgeEl.className = "live-mode-badge badge-live";
    liveModeBadgeEl.innerText = pack.audienceBadge;
  } else {
    liveModeBadgeEl.className = "live-mode-badge badge-skirmish";
    liveModeBadgeEl.innerText = pack.skirmishBadge;
  }
}

function registerRealAudienceInteraction() {
  lastRealInteractionTime = Date.now();
  updateModeBadge(true);
}

// Check every second if real activity has cooled down
setInterval(() => {
  if (Date.now() - lastRealInteractionTime >= IDLE_COOLDOWN_MS) {
    updateModeBadge(false);
  }
}, 1000);

// Rotate CTA tips every 4.2 seconds
setInterval(() => {
  updateLiveTicker();
}, 4200);

function getAmbientIntervals() {
  switch (ambientIntensity) {
    case "relaxed":
      return { troopMin: 3800, troopMax: 6500, tapMin: 2200, tapMax: 4200, dropMin: 45000, dropMax: 70000 };
    case "intense":
      return { troopMin: 1200, troopMax: 2400, tapMin: 800, tapMax: 1600, dropMin: 18000, dropMax: 30000 };
    case "normal":
    default:
      return { troopMin: 2200, troopMax: 3800, tapMin: 1400, tapMax: 2800, dropMin: 28000, dropMax: 45000 };
  }
}

// Dynamic Team Picker: gives trailing teams higher chance to maintain high drama & suspense
function pickAmbientTeam() {
  const counts = { usa: 0, uk: 0, mexico: 0, brazil: 0 };
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (counts[grid[r][c].team] !== undefined) counts[grid[r][c].team]++;
    }
  }

  const pcts = {};
  TEAM_KEYS.forEach(k => { pcts[k] = counts[k] / totalCells; });

  const weightedList = [];
  TEAM_KEYS.forEach(k => {
    let weight = 3;
    if (pcts[k] < 0.18) weight = 7;      // Strong boost if trailing
    else if (pcts[k] < 0.23) weight = 5;
    else if (pcts[k] > 0.45) weight = 1; // Suppress leader to prevent runaway victories
    for (let i = 0; i < weight; i++) weightedList.push(k);
  });

  return weightedList[Math.floor(Math.random() * weightedList.length)] || "usa";
}

let ambientTroopTimer = null;
let ambientTapTimer = null;
let ambientDropTimer = null;

function scheduleNextAmbientTroop() {
  clearTimeout(ambientTroopTimer);
  const intervals = getAmbientIntervals();
  const delay = Math.random() * (intervals.troopMax - intervals.troopMin) + intervals.troopMin;

  ambientTroopTimer = setTimeout(() => {
    const isQuiet = (Date.now() - lastRealInteractionTime) >= IDLE_COOLDOWN_MS;
    if (ambientModeEnabled && !isGameOver && isQuiet) {
      const team = pickAmbientTeam();
      const randomUser = AMBIENT_BOT_USERS[Math.floor(Math.random() * AMBIENT_BOT_USERS.length)];
      spawnTroop(team, randomUser);
    }
    scheduleNextAmbientTroop();
  }, delay);
}

function scheduleNextAmbientTap() {
  clearTimeout(ambientTapTimer);
  const intervals = getAmbientIntervals();
  const delay = Math.random() * (intervals.tapMax - intervals.tapMin) + intervals.tapMin;

  ambientTapTimer = setTimeout(() => {
    const isQuiet = (Date.now() - lastRealInteractionTime) >= IDLE_COOLDOWN_MS;
    if (ambientModeEnabled && !isGameOver && isQuiet) {
      const team = pickAmbientTeam();
      expandFrontier(team, 1);
    }
    scheduleNextAmbientTap();
  }, delay);
}

function scheduleNextAmbientDrop() {
  clearTimeout(ambientDropTimer);
  const intervals = getAmbientIntervals();
  const delay = Math.random() * (intervals.dropMax - intervals.dropMin) + intervals.dropMin;

  ambientDropTimer = setTimeout(() => {
    const isQuiet = (Date.now() - lastRealInteractionTime) >= IDLE_COOLDOWN_MS;
    if (ambientModeEnabled && !isGameOver && isQuiet) {
      const team = pickAmbientTeam();
      const dropTypes = [
        { diamonds: 1, name: "Air Drop", user: "@supply_drop" },
        { diamonds: 5, name: "Meteor", user: "@bot_strike" }
      ];
      const pick = dropTypes[Math.floor(Math.random() * dropTypes.length)];
      launchProjectile(team, pick.diamonds, pick.name, pick.user);
    }
    scheduleNextAmbientDrop();
  }, delay);
}

function toggleAmbientMode(forceState) {
  ambientModeEnabled = forceState !== undefined ? forceState : !ambientModeEnabled;
  const btn = document.getElementById("btn-toggle-ambient");
  if (btn) {
    if (ambientModeEnabled) {
      btn.innerText = "🟢 Skirmish: ON";
      btn.style.borderColor = "#00ff88";
      btn.style.color = "#00ff88";
    } else {
      btn.innerText = "⚪ Skirmish: OFF";
      btn.style.borderColor = "#888";
      btn.style.color = "#888";
    }
  }
  console.log(`[AMBIENT] Auto-skirmish mode: ${ambientModeEnabled ? "ON" : "OFF"}`);
}

function cycleAmbientIntensity() {
  const btn = document.getElementById("btn-ambient-pace");
  if (ambientIntensity === "normal") {
    ambientIntensity = "intense";
    if (btn) btn.innerText = "⚡ Pace: Intense 🔥";
  } else if (ambientIntensity === "intense") {
    ambientIntensity = "relaxed";
    if (btn) btn.innerText = "⚡ Pace: Relaxed 🍃";
  } else {
    ambientIntensity = "normal";
    if (btn) btn.innerText = "⚡ Pace: Normal ⚡";
  }
  console.log(`[AMBIENT] Intensity set to: ${ambientIntensity}`);
}

// Simulator Panel DOM setup & Clean Stream Visibility Controls
const simPanel = document.getElementById("simulator-panel");
const btnToggleSim = document.getElementById("btn-toggle-sim");
const btnCloseSim = document.getElementById("btn-close-sim");
const btnSound = document.getElementById("btn-toggle-sound");

function toggleTestPanel(forceState) {
  const isHidden = simPanel.classList.contains("hidden");
  const shouldShow = forceState !== undefined ? forceState : isHidden;

  if (shouldShow) {
    simPanel.classList.remove("hidden");
    btnToggleSim.classList.add("visible");
    getAudioContext();
  } else {
    simPanel.classList.add("hidden");
    btnToggleSim.classList.remove("visible");
  }
}

btnToggleSim.addEventListener("click", () => {
  toggleTestPanel();
});

btnCloseSim.addEventListener("click", () => {
  toggleTestPanel(false);
});

// Trigger 1: Keyboard shortcuts (H, T, F2 for panel; A for ambient skirmish toggle)
window.addEventListener("keydown", (e) => {
  if (e.key === "h" || e.key === "H" || e.key === "t" || e.key === "T" || e.key === "F2") {
    toggleTestPanel();
  }
  if (e.key === "a" || e.key === "A") {
    toggleAmbientMode();
  }
});

// Trigger 2: Double-click the round timer to toggle panel
const roundTimerEl = document.getElementById("round-timer");
if (roundTimerEl) {
  roundTimerEl.style.cursor = "pointer";
  roundTimerEl.title = "Double-click to toggle Test Panel";
  roundTimerEl.addEventListener("dblclick", () => {
    toggleTestPanel();
  });
}

// Trigger 3: Secret triple-click on title
let titleClickCount = 0;
let titleClickTimer = null;
const titleEl = document.querySelector(".title-bar h1");
if (titleEl) {
  titleEl.addEventListener("click", () => {
    titleClickCount++;
    clearTimeout(titleClickTimer);
    if (titleClickCount >= 3) {
      titleClickCount = 0;
      toggleTestPanel();
    } else {
      titleClickTimer = setTimeout(() => { titleClickCount = 0; }, 600);
    }
  });
}

btnSound.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  btnSound.innerText = soundEnabled ? I18N[currentLang].soundOn : I18N[currentLang].soundOff;
  if (soundEnabled) getAudioContext();
});

// Initialize on Load
window.addEventListener("DOMContentLoaded", () => {
  adjustViewportScale();
  resizeCanvas();
  initGrid();
  updateTerritoryStats();
  connectWebSocket();
  requestAnimationFrame(gameLoop);

  // Start Auto-Skirmish loops
  scheduleNextAmbientTroop();
  scheduleNextAmbientTap();
  scheduleNextAmbientDrop();

  // Check URL Parameters
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("test") || urlParams.has("admin") || urlParams.has("dev")) {
    toggleTestPanel(true);
  } else {
    console.log("[INFO] Clean stream broadcast mode: Test panel is hidden. Press 'H', 'T', 'A' or double-click timer to open.");
  }

  if (urlParams.get("ambient") === "0" || urlParams.get("ambient") === "off" || urlParams.get("ambient") === "false") {
    toggleAmbientMode(false);
  }

  if (urlParams.get("pace") && ["relaxed", "normal", "intense"].includes(urlParams.get("pace"))) {
    ambientIntensity = urlParams.get("pace");
    const btn = document.getElementById("btn-ambient-pace");
    if (btn) btn.innerText = `⚡ Pace: ${ambientIntensity}`;
  }
});
