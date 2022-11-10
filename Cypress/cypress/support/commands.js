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
import { MemberDetailPage } from "../pageObject/memberDeailPage";
import { MemberPage } from "../pageObject/membersPage";
import { PublishedPostsPage } from "../pageObject/publishedPostsPage";
import { ModalPage } from "../pageObject/modalPage";


const memberPage = new MemberPage();
const postPage = new PostPage();
const loginPage = new LoginPage();
const memberDetailPage = new MemberDetailPage();
const publishedPostsPage = new PublishedPostsPage();
const modalPage = new ModalPage();

Cypress.Commands.add("login", (email, password) => {
    loginPage.getEmailInput().type(email);
    loginPage.getPasswordInput().type(password);
    loginPage.getLoginButton().click();
});


Cypress.Commands.add("createPost", (title, content) => {
    postPage.getPostTitleInput().type(title);
    postPage.getPostContentInput().type(content);
    postPage.getPublishPostButton().click();
    postPage.getContinueButtonModal().click();
    postPage.getConfirmPublishButtonModal().click();
});


Cypress.Commands.add("createMember", (name, email, note) => {
    memberPage.getNewMemberButton().click();
    memberDetailPage.getMemberNameInput().type(name);
    memberDetailPage.getMemberEmailInput().type(email);
    memberDetailPage.getNoteInput().type(note);
    memberDetailPage.getSaveButton().click();
});


Cypress.Commands.add("deleteMember", (name) => {
    memberPage.getMemberLink(name).click();
    memberDetailPage.getDropdownButton().click();
    memberDetailPage.getDeleteButton().click();
    modalPage.getConfirmDeleteButton().click();
});

Cypress.Commands.add("editPost", (title, newTitle, content) => {
    publishedPostsPage.getAllPostTitles().contains(title).click();
    postPage.getPostTitleInput().clear().type(newTitle);
    postPage.getPostContentInput().clear().type(content);
    postPage.getUpdatePostButton().click();
});

Cypress.Commands.add("deletePost", (title) => {
    publishedPostsPage.getAllPostTitles().contains(title).click({force: true});
    postPage.getSideMenuButton().click();
    postPage.getSideMenuDeleteButton().click();
    modalPage.getConfirmDeleteButton().click();
});



