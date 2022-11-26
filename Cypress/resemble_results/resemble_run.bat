@echo off
title Batch to run VRT
color 0A


xcopy ..\results\screenshots\ghost\escenario01.js\ .\results_copy\screenshots\ghost\escenario1.js\ /E /H /C /I /Y
xcopy ..\results\screenshots\ghost\escenario02.js\ .\results_copy\screenshots\ghost\escenario2.js\ /E /H /C /I /Y
xcopy ..\results\screenshots\ghost\escenario04.js\ .\results_copy\screenshots\ghost\escenario4.js\ /E /H /C /I /Y
xcopy ..\results\screenshots\ghost\escenario15.js\ .\results_copy\screenshots\ghost\escenario15.js\ /E /H /C /I /Y
xcopy ..\results\screenshots\ghost\escenario16.js\ .\results_copy\screenshots\ghost\escenario16.js\ /E /H /C /I /Y
xcopy ..\results\screenshots\ghostOld\escenario01.js\ .\results_copy\screenshots\ghostOld\escenario1.js\ /E /H /C /I /Y
xcopy ..\results\screenshots\ghostOld\escenario02.js\ .\results_copy\screenshots\ghostOld\escenario2.js\ /E /H /C /I /Y
xcopy ..\results\screenshots\ghostOld\escenario04.js\ .\results_copy\screenshots\ghostOld\escenario4.js\ /E /H /C /I /Y
xcopy ..\results\screenshots\ghostOld\escenario15.js\ .\results_copy\screenshots\ghostOld\escenario15.js\ /E /H /C /I /Y
xcopy ..\results\screenshots\ghostOld\escenario16.js\ .\results_copy\screenshots\ghostOld\escenario16.js\ /E /H /C /I /Y

node index.js

PAUSE