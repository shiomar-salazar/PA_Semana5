const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const {options, scensNumber, stepsCount, scensCount} = config;

async function executeTest() {

  let resultInfo = [];

    for (let i = 0; i < scensCount; i++) {
      for (let j = 1; j < stepsCount[i]+1; j++) {

        let scenName = `esc-${scensNumber[i]}-ss-${j}`;
        let urlBeforeScreenshot = `./results_copy/screenshots/ghostOld/escenario${scensNumber[i]}.js/screenshot_${j}.png`;
        let urlAfterScreenshot = `./results_copy/screenshots/ghost/escenario${scensNumber[i]}.js/screenshot_${j}.png`;
        let urlCompareScreenshot = `./results/escenario${scensNumber[i]}/compare-${scenName}.png`;

        let urlBefore = `../results_copy/screenshots/ghostOld/escenario${scensNumber[i]}.js/screenshot_${j}.png`;
        let urlAfter = `../results_copy/screenshots/ghost/escenario${scensNumber[i]}.js/screenshot_${j}.png`;
        let urlCompare = `./escenario${scensNumber[i]}/compare-${scenName}.png`;

        if (fs.existsSync(urlBeforeScreenshot) && fs.existsSync(urlAfterScreenshot)) {
          const data = await compareImages(
              fs.readFileSync(urlBeforeScreenshot),
              fs.readFileSync(urlAfterScreenshot),
              options
          );
          resultInfo.push({
            scen: scensNumber[i],
            step: j,
            urlBefore,
            urlAfter,
            urlCompare,
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime
          });
          fs.writeFileSync(urlCompareScreenshot, data.getBuffer(),{flag: 'w+'});
        }
      }
  }

  fs.writeFileSync(`./results/report.html`, createReport(resultInfo));
  fs.copyFileSync('./index.css', `./results/index.css`);

  console.log('------------------------------------------------------------------------------------')
  console.log("Execution finished. Check the report under the results folder")
  return resultInfo;
}

(async () => console.log(await executeTest()))();

function scen(info) {
  return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Scen: ${info.scen} Step: ${info.step}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">v4.44.0</span>
        <img class="img2" src="${info.urlBefore}" id="refImage" label="v4.44.0">
      </div>
      <div class="imgcontainer">
        <span class="imgname">v5.18</span>
        <img class="img2" src="${info.urlAfter}" id="testImage" label="v5.18">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="${info.urlCompare}" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(results) {
  return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for Ghost v4.44.0 vs v.5.18.0</h1>
            ${results.map(info => scen(info))}
        </body>
    </html>`
}