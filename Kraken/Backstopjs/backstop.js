const _ = require('lodash');
const fs = require('fs');
const args = require('yargs').argv;
var projectPath = ""//`public/${args.p}`;
const backstop = require('backstopjs');

const filesToIgnore = {
  'first-project': [
    'ignore-me.html'
  ],
  'second-project': [
    'ignore-me.html'
  ],
  'third-project': [
    'ignore-me.html'
  ]
};


function backstopIni(args1)
{
  projectPath = args1.p;
  const projectConfig = require('./backstop.config.js')({
    'project': args1.p,
    'scenarios': getScenariosForProject(projectPath + '/' + args1.comando)
  });
  
  let commandToRun = args1.comando;
  
  if (commandToRun !== '') {
    backstop(commandToRun, { config: projectConfig });
  }
  

}

function readAllFiles(path, arrayOfFiles = []){
	const files = fs.readdirSync(path)
	//files.forEach(file => {
	//	const stat = fs.statSync(`${path}/${file}`)
	//	if(stat.isDirectory()){
	//		readAllFiles(`${path}/${file}`, arrayOfFiles)
	//	}else{
	//		arrayOfFiles.push(`${path}/${file}`)
	//	}
//	}
//	)
	return files;
}

function getScenariosForProject (projectPath) {
  const files = readAllFiles(projectPath);

  let scenarios;

  _.remove(files, isFileToIgnore);

  scenarios = files.map(file => {
    const scenarioLabel = file.split('.')[0].split('-').join(' ');
//public/ghost/escenario_S5/test/0.html
    return {
      'label': scenarioLabel,
      'url': `http://localhost:8002/${projectPath}/${file}`,
      'delay': 500,
      'misMatchThreshold': 0.1
    };
  });

  return scenarios;
}

function isFileToIgnore (file) {
  let shouldBeRemoved = false;

  // make sure we only have html files
  if (file.indexOf('.html') === -1) {
    shouldBeRemoved = true;
  }

  // exclude files by name
  if (filesToIgnore[args.p] && filesToIgnore[args.p].indexOf(file) > -1) {
    shouldBeRemoved = true;
  }

  return shouldBeRemoved;
}

module.exports = {
  "backstopIni": backstopIni
}