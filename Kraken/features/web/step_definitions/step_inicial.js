const { Given, When, Then } = require('@cucumber/cucumber');


// se reutiliza Archivo de Steps inicial modificando unicamente el servidor para Ghost 3.4.2.

//  crear un post en Ghost

Given('I want to create a new Post', async function(){
  await this.driver.url("http://localhost:3001/ghost/#/posts");
  await new Promise(r=> setTimeout(r,3000));
  let element = await this.driver.$('a[href="#/editor/post/"]');
  await new Promise(r=> setTimeout(r,2000));
  return await element.click();
}); 

When('I fill the information Post {kraken-string},{kraken-string}', async function (titulo, parrafo) {
  await this.driver.$('textarea[placeholder="Post title"]').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('textarea[placeholder="Post title"]').setValue(titulo);
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('div[data-placeholder="Begin writing your post..."]').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('div[data-placeholder="Begin writing your post..."]').setValue(parrafo);
  await new Promise(r=> setTimeout(r,2000));
  

});

Then('I should see the post published', async function () {
  await this.driver.$('button.gh-publish-trigger').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('button.gh-btn-large').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('div[class="gh-publish-cta"] > button:first-of-type').click();
  await new Promise(r=> setTimeout(r,5000));
  await this.driver.url("http://localhost:3001/ghost/#/posts");
  await new Promise(r=> setTimeout(r,2000));
});


//  editar un post en Ghost

Given('I want to edit a Post', async function(){
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.url("http://localhost:3001/ghost/#/posts");
  await new Promise(r=> setTimeout(r,4000));
  await this.driver.$('ol.posts-list > li:first-of-type > a').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('.gh-post-list-cta.edit').click();
  await new Promise(r=> setTimeout(r,2000));
  
}); 


Then('I should see the Post Updated', async function () {
  let element =await this.driver.$('button.gh-editor-save-trigger.green');
  await new Promise(r=> setTimeout(r,4000));
  return await element.click();
   
});


//  eliminar un post en Ghost



When('I selected the delete post settings', async function () {
  await this.driver.$('.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('.gh-btn.gh-btn-hover-red.gh-btn-icon').click();
  await new Promise(r=> setTimeout(r,2000));
});


Then('I should confirm the Post deleted', async function () {
  await this.driver.$('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('.posts_svg__a').click();
  await new Promise(r=> setTimeout(r,2000));
  
});


//  crear un nuevo miembro en Ghost


Given('I want to create a new Member', async function(){
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.url("http://localhost:3001/ghost/#/members");
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('a[href="#/members/new/"]').click();
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
  await this.driver.url("http://localhost:3001/ghost/#/members");
  await new Promise(r=> setTimeout(r,2000));
});


//  Eliminar un miembro en Ghost


Given('I want to delete a Member', async function(){
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.url("http://localhost:3001/ghost/#/members");
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
  await this.driver.url("http://localhost:3001/ghost/#/members");
  await new Promise(r=> setTimeout(r,2000));
});

