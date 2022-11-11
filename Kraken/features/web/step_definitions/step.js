const { Given, When, Then } = require('@cucumber/cucumber');
// con la libreria chai se debe validar si el evento se cumplio, Ej: que se creo el post
const expect = require('chai').expect;





//  crear un post en Ghost

Given('I want to create a new Post', async function(){
  let element = await this.driver.$('a[href="#/editor/post/"]');
  await new Promise(r=> setTimeout(r,2000));
  return await element.click();
}); 

When('I fill the information Post', async function () {
  await this.driver.$('textarea[placeholder="Post title"]').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('textarea[placeholder="Post title"]').setValue("El mejor viaje que me he regalado");
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('div[data-placeholder="Begin writing your post..."]').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('div[data-placeholder="Begin writing your post..."]').setValue("Nueva PRueba, En medio de su viaje a Egipto por cuenta de la COP27, la ministra de Minas y Energía, Irene Vélez, anunció cuáles serán los primeros pasos para la construcción de lo que sería la hoja de ruta para la transición energética.");
  await new Promise(r=> setTimeout(r,2000));
  

});

Then('I should see the post published', async function () {
  await this.driver.$('button.gh-publish-trigger').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('button.gh-btn-large').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('div[class="gh-publish-cta"] > button:first-of-type').click();
  await new Promise(r=> setTimeout(r,5000));
  let elements = await this.driver.$$("#ember971");
  expect(elements.length).to.equal(0); //validar si se creo el post
});
/*
Then('I see the post published', async function () {
  let elements = await this.driver.$$("span[aria-label='See who reacted to this']");
  expect(elements.length).to.equal(0);
});
*/


//  editar un post en Ghost

Given('I want to edit a Post', async function(){
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.url("http://localhost:2368/ghost/#/posts");
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('ol.posts-list > li:first-of-type > a').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('.gh-post-list-cta.edit').click();
  await new Promise(r=> setTimeout(r,2000));
  
}); 


Then('I should see the Post Updated', async function () {
  let element =await this.driver.$('button.gh-editor-save-trigger.green');
  await new Promise(r=> setTimeout(r,2000));
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
  let element = await this.driver.$('.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
  await new Promise(r=> setTimeout(r,5000));
  return await element.click();
});


//  crear un nuevo miembro en Ghost


Given('I want to create a new Member', async function(){
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.url("http://localhost:2368/ghost/#/members");
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('a[href="#/members/new/"]').click();
  await new Promise(r=> setTimeout(r,2000));
  
}); 

When('I fill the information of the Member', async function () {
  await this.driver.$('input[name="name"]').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('input[name="name"]').setValue("ermenegildo Zegna");
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('input[name="email"]').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('input[name="email"]').setValue("ermenegildo.zegna@hotmail.com");
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('textarea[name="note"]').click();
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('textarea[name="note"]').setValue("Gran diseñador de ropa, quien se ha distinguido por liderar los mercados Europeos");
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.$('section[class="view-actions"] > button').click();
  await new Promise(r=> setTimeout(r,2000));
 
});


Then('I should see the Member published', async function () {
  await this.driver.url("http://localhost:2368/ghost/#/members");
  await new Promise(r=> setTimeout(r,2000));
});


//  Eliminar un miembro en Ghost


Given('I want to delete a Member', async function(){
  await new Promise(r=> setTimeout(r,2000));
  await this.driver.url("http://localhost:2368/ghost/#/members");
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
  await new Promise(r=> setTimeout(r,2000));
   
});

 
Then('I should see the Member deleted', async function () {
  await this.driver.url("http://localhost:2368/ghost/#/members");
  await new Promise(r=> setTimeout(r,2000));
});




//  Como usuario quiero crear un miembro nuevo y luego crear un Post en Ghost

 /* 
@user5 @web   


Scenario: Como usuario quiero crear un miembro nuevo y luego crear un Post en Ghost

	Given I want to create a new Member
	When I fill the information of the Member
	Then I should see the Member published
	And I want to create a new Post
	And I fill the information Post
	And I should see the post published



 



   
*/
