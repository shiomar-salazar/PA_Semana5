## Instrucciones para correr Las pruebas E2E

### Correr Version Actual de Ghost (v5.18)
1. Clone el repositorio de la entrega.
2. Abra una terminal con privilegios de Administrador.
3. Usando el comando cd vaya ubíquese en su terminal en la raíz del repositorio.
4. Ejecute el comando "npm install" en la terminal
5. Despues de la instalcion dirijase al archivo: ..\PA_Semana5\Cypress\cypress.json y actualice sus credenciales de acceso a Ghost Admin.
6. Inicie su intancia de Ghost Version 5.18.0
   * Si no tiene esta version puede hacer una instalacion local de Ghost usando: ghost install 5.18.0 --local
7. Ejecute en la tarminal abierta el comando: "npm run cy:runGhost" para ejecutar solo las pruebas de la version Actual de Ghost

### Correr Version Vieja de Ghost (v4.44)
1.
2.
3. Ejecute en la tarminal abierta el comando: "npm run cy:runrunGhostOldGhost" para ejecutar solo las pruebas de la version Vieja de Ghost

### Correr todas las pruebas
1. Como las dos versiones de Ghost pueden correr a la vez, se puede ejecutar todas las pruebas utilizando el comando: "npm run cy:runGhost" en su terminal en la raíz del repositorio.

### Correr pruebas VRT y obtener reporte
1. Una vez corridas las pruebas EE2E de las dos versiones, ir al subdirectorio: Cypress\resemble_results
2. Ejecute el Batch llamado: resemble_run.bat
  * El Bat ejecuta copia las capturas de pantalla de los escenarios elegidos de la carpeta donde cypress las guarda a la carpeta donde resembleJS las necesita para procesaras, y por ultimo corre el index.js de resembleJS.
3. Revise el reporte en el directorio: \Cypress\resemble_results\results
