const koa = require('koa');
const serve = require('koa-serve');

//const app = new koa();
const app = module.exports = new koa();

app.use(serve('public'));



function iniServer(){
  app.listen(8002, () => {
    console.log('Koa is listening at localhost:8002');
  });
}

module.exports = {
  "iniServer": iniServer
}