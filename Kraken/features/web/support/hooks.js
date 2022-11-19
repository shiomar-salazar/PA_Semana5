const { After, Before } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');

Before(async function() {
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
  //  ingresar con un usuario existente
  await this.driver.url("http://localhost:3001/ghost/#/signin");
  await new Promise(r=> setTimeout(r,3000));
  await this.driver.$('#identification').setValue("rockwin17@gmail.com");
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('#password').setValue("Proper2022");
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('#ember7').click();
  await new Promise(r=> setTimeout(r,2000));

})

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});
