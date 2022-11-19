const { Given, When, Then } = require('@cucumber/cucumber');

/*const expect = require('chai').expect;

// con la libreria chai se debe validar si el evento se cumplio, Ej: que se creo el post

Then('I see that the post is not liked', async function () {
  let elements = await this.driver.$$("span[aria-label='See who reacted to this']");
  expect(elements.length).to.equal(0); // debo revisar que sean iguales en tamano los titulos
});
*/


//  crear un post en Ghost version 3.4.2

Given('I want to create a new Post', async function(){
  await this.driver.url("http://localhost:3001/ghost/#/posts");
  await new Promise(r=> setTimeout(r,3000));
  let element = await this.driver.$('a[href="#/editor/post/"]');
  await new Promise(r=> setTimeout(r,2000));
  return await element.click();
}); 

// actualizo los campos basicos de un post ya sea para crear o para editar
When('I fill the information Post {kraken-string},{kraken-string}', async function (titulo, parrafo) {
  await this.driver.$('textarea[placeholder="Post Title"]').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('textarea[placeholder="Post Title"]').setValue(titulo);
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('div[data-placeholder="Begin writing your post..."]').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('div[data-placeholder="Begin writing your post..."]').setValue(parrafo);
  await new Promise(r=> setTimeout(r,2000));
  

});

Then('I should see the post published', async function () {
  await this.driver.$('.ember-view.ember-basic-dropdown-trigger').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
  await new Promise(r=> setTimeout(r,5000));
/*  await this.driver.$('div[class="gh-publish-cta"] > button:first-of-type').click();
  await new Promise(r=> setTimeout(r,5000));*/
  await this.driver.url("http://localhost:3001/ghost/#/posts");
  await new Promise(r=> setTimeout(r,2000)); 
});


//  editar un post en Ghost 3.4.2. lo primero que hago es seleccionarlo de la lista de post

Given('I want to edit a Post', async function(){
  await new Promise(r=> setTimeout(r,2000));
  // voy al listado de posts
  await this.driver.url("http://localhost:3001/ghost/#/posts");
  await new Promise(r=> setTimeout(r,4000));
  // selecciono un post de la lista
  await this.driver.$('.ember-view.permalink.gh-list-data.gh-post-list-title').click();
  await new Promise(r=> setTimeout(r,2000));
 
  
}); 

// actualizar el post con Update
Then('I should see the Post Updated', async function () {
  await this.driver.$('.ember-view.ember-basic-dropdown-trigger.ember-basic-dropdown-trigger').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
  await new Promise(r=> setTimeout(r,4000));
  await this.driver.url("http://localhost:3001/ghost/#/posts");
  await new Promise(r=> setTimeout(r,2000)); 
    
});

// funcion provisional de prueba scroll para Ghost 3.4.2
//  When('I scroll', async function () {
//    return await this.driver.execute(() => {
//      window.scroll(0, 500);
//    });
//  });

//  eliminar un post en Ghost

// una vez fue seleccionado desde la lista re-utilizando la funcion Given I want to edit a post anterior, ingresamos al menu y buscamos el boton eliminar

When('I selected the delete post settings', async function () {
  await this.driver.$('.post-settings').click(); //ingreso a post settings
  await new Promise(r=> setTimeout(r,2000));
    await this.driver.execute(() => { 
      document.querySelector('.settings-menu-pane-in').scroll(0,1000); //hacemos scroll para llegar al boton eliminar post
    });
   let a = await this.driver.$('.settings-menu-content > form > button'); //seleccionamos boton: eliminar post
   await a.click();
  await new Promise(r=> setTimeout(r,4000));
});


Then('I should confirm the Post deleted', async function () {
  await this.driver.$('.gh-btn-red').click(); // confirmamos la eliminacion en modal flotante en el boton aceptar eliminacion
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.url("http://localhost:3001/ghost/#/posts"); //regresamos al listado de post para evidenciar que ya no existe
  await new Promise(r=> setTimeout(r,2000));
  
});


// en el antiguo Ghost no existe la seccion miembros

//  crear un nuevo miembro en Ghost


Given('I want to create a new Member', async function(){
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.url("http://localhost:3001/ghost/#/staff");
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('.gh-btn.gh-btn-green').click();
  await new Promise(r=> setTimeout(r,2000));
  
}); 

When('I fill the information of the Member {kraken-string},{kraken-string},{kraken-string}', async function (nombre, correo, descripcion) {
  await this.driver.$('input[name="name"]').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('input[name="name"]').setValue(nombre);
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('input[name="email"]').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('input[name="email"]').setValue(correo);
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('textarea[name="note"]').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('textarea[name="note"]').setValue(descripcion);
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('section[class="view-actions"] > button').click();
  await new Promise(r=> setTimeout(r,2000));
 
});


Then('I should see the Member published', async function () {
  await this.driver.url("http://localhost:3001/ghost/#/staff");
  await new Promise(r=> setTimeout(r,2000));
});


//  Eliminar un miembro en Ghost


Given('I want to delete a Member', async function(){
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.url("http://localhost:3001/ghost/#/staff");
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('.gh-nav-member-count').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('table[class="gh-list"] > tbody > tr:first-of-type h3.gh-members-list-name').click();
  await new Promise(r=> setTimeout(r,2000));
  
}); 


When('I select the delete Member option', async function () {
  await this.driver.$('section.view-actions > span.dropdown > button').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('section[class="view-actions"] > span.dropdown > ul > li:last-of-type > button').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('.gh-btn.gh-btn-red').click();
  await new Promise(r=> setTimeout(r,5000));
   
});

 
Then('I should see the Member deleted', async function () {
  await this.driver.url("http://localhost:3001/ghost/#/staff");
  await new Promise(r=> setTimeout(r,2000));
});




