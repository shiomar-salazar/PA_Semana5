// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { LoginPage } from "../pageObject/loginPage";
import { PostPage } from "../pageObject/postPage";
import { NewMemberPage } from "../pageObject/newMemberPage";
import { MemberPage } from "../pageObject/membersPage";



Cypress.Commands.add("login", (email, password) => {
    const loginPage = new LoginPage();
    loginPage.getEmailInput().type(email);
    loginPage.getPasswordInput().type(password);
    loginPage.getLoginButton().click();
});


Cypress.Commands.add("createPost", (title, content) => {
    const postPage = new PostPage();
    postPage.getPostTitleInput().type(title);
    postPage.getPostContentInput().type(content);
    postPage.getPublishPostButton().click();
    postPage.getContinueButtonModal().click();
    postPage.getConfirmPublishButtonModal().click();
});


Cypress.Commands.add("createMember", (name, email, note) => {
    const memberPage = new MemberPage();
    memberPage.getNewMemberButton().click();

    const newMemberPage = new NewMemberPage();
    newMemberPage.getMemberNameInput().type(name);
    newMemberPage.getMemberEmailInput().type(email);
    newMemberPage.getNoteInput().type(note);
    newMemberPage.getSaveButton().click();
});







