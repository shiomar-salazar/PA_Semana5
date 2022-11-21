const _ = require('lodash');
const fs = require('fs');
const s  = require("./server.js");
const b = require("./backstop.js");
const { Console } = require('console');
const args = require('yargs').argv;

function getHtmlForProject (projectPath, resultPath, tipo) {
  const escenarios = fs.readdirSync(projectPath);
  
  escenarios.forEach(element => {
    const files = fs.readdirSync(projectPath + "/" + element + "/screenshots");
    const scenarioLabel = element.split('.')[0];
    files.map( (file, index) => {
     const NameFile = index; //file.split('.')[0];
      if (!fs.existsSync(`${resultPath}/escenario_${scenarioLabel}/${tipo}`)){
        fs.mkdirSync(`${resultPath}/escenario_${scenarioLabel}/${tipo}`, { recursive: true });
      }
      let image = projectPath + "/" + element + "/screenshots/" + file;
      fs.writeFileSync(`${resultPath}/escenario_${scenarioLabel}/${tipo}/${NameFile}.html`, createHtmlImage(file));
      fs.copyFileSync(image, `${resultPath}/escenario_${scenarioLabel}/${tipo}/${file}`);
  
      
    })});
    
  }

  function createHtmlImage(FilaNAme){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img src="./${FilaNAme}">
</body>
</html>`
}

getHtmlForProject("./backstop_data/images/Ghost_342","./public/ghost", 'reference' );
getHtmlForProject("./backstop_data/images/Ghost_522","./public/ghost", 'test' );
s.iniServer();
console.log("inicio");
var comando = '';
if(args.reference)
{
  comando = 'reference';

}
if(args.test)
{
  comando = 'test';
}
console.log(comando);
let args1 ={"p":"public/ghost/escenario_S8","comando":comando};

//reference
//test
var ruta = args1.p;
var comando = args1.comando;
b.backstopIni(args1);
