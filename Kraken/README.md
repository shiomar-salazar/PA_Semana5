## Instrucciones para correr Las pruebas E2E con Kraken
Ambiente utilizado: SO Windows 11, node.js v 14.20.1, npm 6.14.17, nvm 1.1.7, android studio 2021.3, Ghost-CLI version: 1.23.1, Ghost 5.22.9
Clone el repositorio de la entrega.
 Abra el GIT-BASH
 validar la instalacion de node.js (usando node -v en la terminal), npm (usando npm -v en la terminal), nvm (usando nvm -v en la terminal), Ghost (usando ghost --version en la terminal)
 Usando el comando cd varias veces, ubíquese desde su terminal en la raíz de la carpeta Kraken del repositorio clonado.
 Validar que kraken este instalado en dicha carpeta, para eso corra: npm install kraken-node, en la carpeta kraken de modo que aseguremos que se instale la carpeta node_modules, valide que dentro de node_modules este la carpeta: kraken-node
 Iniciar Ghost con el comando: ghost start desde la carpeta de instalacion de este, asegurando que la URL del despliegue de Ghost sea: http://localhost:2368/ghost
 una vez se inicia Ghost, validar que se ejecuta en la url:http://localhost:2368/ghost, que fue la utilizada en el ejercicio, en caso de que utilizan una direccion diferente, se debe modificar la linea 17 del archivo: hooks.js que esta en la ruta ..\PA_Semana5\Kraken\features\web\support, con la nueva URL que ustedes tengan, de igual forma en el archivo steps.js se debe modificar la ruta en las lineas: 17, 44, 53, 97, 124, 134, y 158, con los cambios que correspondan segun se servidor de ejecucion de Ghost.
 Una vez se ejecuta Ghost, validar si la pagina de llegada es la del login de un usuario existe o por lo contrario si se ubica en la pagina de crear nuevo usuario, en este ultimo caso se debe crear un usuario nuevo con las credenciales: Titulo:Rockwin, usuario: rockwin17@gmail.com, password: Proper2022, ya que este usuario es el que esta quemado en el archivo hooks.js (en la funcion Before) dentro de la carpeta feature\web\support de la carpeta kraken, en la lineas 10 y 12 respectivamente, en este caso si quiere usar otro usuario se deben modificar estas lineas, de lo contrario se deja como estan.
Para este ejercicio se definieron 5 funcionalidades y 20 escenarios (combinacion de estas 5 funcionalidades en pruebas E2E), descritas en el Readme de la raiz del repositiorio.
Los 20 escenarios y las 5 funcionalidades son descritas en lenguaje Gherkin (cucumber) en 25 archivos de tipo xxxx.feature que se encuentran ubicados en la ruta ..\PA_Semana5\Kraken\features\scripts, para poder ejecutar cada escenario, se debe tomar este de esa carpeta y moverlo a la carpeta  ..\PA_Semana5\Kraken\features, asegurando que se tenga un UNICO archivo xxxx.feature en la raiz de \feature, ya que asi funciona en ambiente windows
Por default en la carpeta \feature se tiene el primer escenario que es: S1-crear_miembro_crear_post.feature, este sera el que se ejecutara cuando se corra kraken
para ejecutar los otros escenarios, se deben intercambiar los archivos .feature desde la carpeta \scripts
para ejecutar la prueba, se debe abrir GIT-BASH en la carpeta \kraken del repositorio y escribir el comando: ./node_modules/kraken-node/bin/kraken-node run
una vez se termine de ejecutar la prueba y se evidencie que fue exitosa, se puede revisar el reporte en la carpeta: ..\PA_Semana5\Kraken\reports
En esta carpeta ya se tienen creadas 25 carpetas que evidencia la ejecucion satisfactoria de las pruebas de los 20 escenarios y las 5 funcionalidades base.
Tenga en cuenta que la prueba del login esta incluida en la funcion before del archivo hooks.js, eso quiere decir que se ejecuta en todos los escenarios.
Por ultimo, cada vez que corran una prueba se creara una nueva carpeta con los resultados en la carpeta \reports, por si lo quieren revalidar.
Les deseamos muchos exitos en las pruebas a ejecutar

