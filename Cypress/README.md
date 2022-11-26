## Instrucciones para correr Las pruebas E2E

### Correr Version Actual de Ghost (v5.18)
1. Clone el repositorio de la entrega.
2. Abra una terminal con privilegios de Administrador.
3. Usando el comando cd vaya ubíquese en su terminal en la raíz del repositorio.
4. Ejecute el comando "npm install" en la terminal
5. Despues de la instalcion dirijase al archivo: ..\PA_Semana5\Cypress\cypress.json y actualice sus credenciales de acceso a Ghost Admin.
6. Inicie su intancia de Ghost Version 5.18.0
   * Si no tiene esta version puede hacer una instalacion local de Ghost usando: ghost install 5.18.0 --local
7. Ejecute en la teerminal abierta el comando: "npm run cy:runGhost" para ejecutar solo las pruebas de la version Actual de Ghost

### Correr Version Vieja de Ghost (v4.44)
1. Instalar docker en su computador
2. Correr docker para poder correr el contenedor e instalar la imagen
3. Usar el comando docker run -d -e url=http://localhost:3002 -p 3002:2368 --name ghost_4.44.0 ghost:4.44.0
5. Verificar que en el puerto 3002 se este ejecutando ghost 4.44
6. Ejecute en la terminal abierta el comando: "npm run cy:runrunGhostOldGhost" para ejecutar solo las pruebas de la version Vieja de Ghost

(NOTA: se uso ghost v4.44 en vez de 3.2 por que en cypress usando la version 3.2 disparaba un error que se pregunto por el chat de slack 2 veces y ningun tutor ni profesor respondio, se intento buscar solucion en internet pero no se encontro, aun asi se hizo la regresion bajando de la version 5.18 a la 4.44)

### Correr todas las pruebas
1. Antes de ejecutar las pruebas para la captura de las pantallazos del VRT, por favor ejecute el batch: Cypress\results\clean_screenshot.bat
   * Se necesita borrar las capturas de pantalla vieja porque la version de Cypress 6.8 no tiene la opcion de overwrite implementada.
2. Como las dos versiones de Ghost pueden correr a la vez, se puede ejecutar todas las pruebas utilizando el comando: "npm run cy:runGhost" en su terminal en la raíz del repositorio.

### Correr pruebas VRT y obtener reporte
1. Antes de ejecutar las pruebas para la captura de las pantallazos del VRT, por favor ejecute el batch: Cypress\results\clean_screenshot.bat
2. Una vez corridas las pruebas EE2E de las dos versiones, ir al subdirectorio: Cypress\resemble_results
3. Ejecute el Batch llamado: resemble_run.bat
   * El Bat ejecuta copia las capturas de pantalla de los escenarios elegidos de la carpeta donde cypress las guarda a la carpeta donde resembleJS las necesita para procesaras, y por ultimo corre el index.js de resembleJS.
4. Revise el reporte en el directorio: \Cypress\resemble_results\results

### Correr pruebas Con data pool
1. Siga los pasos de ejecucion de Correr Version Actual de Ghost (v5.18) hasta el paso 6
7. Ejecute en la terminal abierta el comando: "npm run cy:runGhostData" para ejecutar solo las pruebas de Ghost 5.18.0 con data Pool

