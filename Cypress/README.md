## Instrucciones para correr Las pruebas E2E
1. Clone el repositorio de la entrega.
2. Abra una terminal con privilegios de Administrador.
3. Usando el comando cd vaya ubíquese en su terminal en la raíz del repositorio.
4. Ejecute el comando "npm install" en la terminal
5. Despues de la instalcion dirijase al archivo: ..\PA_Semana5\Cypress\cypress.json y actualice sus credenciales de acceso a Ghost Admin.
6. Inicie su intancia de Ghost Version 5.18.0
   * Si no tiene esta version puede hacer una instalacion local de Ghost usando: ghost install 5.18.0 --local
7. Ejecute en la tarminal abierta el comando: "npm run cy:run"
