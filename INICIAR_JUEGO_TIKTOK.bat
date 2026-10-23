@echo off
title Servidor TikTok Live - World Flag Championship (@vortex_rival)
cd /d "%~dp0"
cls
echo ======================================================================
echo    WORLD FLAG CHAMPIONSHIP - TIKTOK LIVE SERVER (@vortex_rival)
echo ======================================================================
echo.
echo   [*] Fuente para OBS:     http://localhost:8080/
echo   [*] Control Remoto:      http://localhost:8080/control
echo   [*] Panel de Pruebas:    http://localhost:8080/?test=1
echo   [*] Cuenta TikTok:       @vortex_rival
echo.
echo ======================================================================
echo   Iniciando servidor... (Presiona Ctrl + C para detenerlo cuando quieras)
echo ======================================================================
echo.
python tiktok_websocket_bridge_server.py
pause
