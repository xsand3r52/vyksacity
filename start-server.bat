@echo off
title VyksaCity — Сервер
color 0A
echo ========================================
echo    Запуск сервера VyksaCity
echo ========================================
echo.
echo    Ссылка: http://vyksacity.duckdns.org:8080
echo.
echo    Для остановки: Ctrl + C
echo ========================================
echo.
python -m http.server 8080
pause