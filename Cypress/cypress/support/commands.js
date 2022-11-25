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
import { PagesPage } from "../pageObject/pagesPage";


const memberPage = new MemberPage();
const postPage = new PostPage();
const loginPage = new LoginPage();
const memberDetailPage = new MemberDetailPage();
const publishedPostsPage = new PublishedPostsPage();
const modalPage = new ModalPage();
const pagesPage = new PagesPage();


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
    memberPage.getMemberLink(name).click({force: true});
    memberDetailPage.getDropdownButton().click();
    memberDetailPage.getDeleteButton().click();
    modalPage.getConfirmDeleteButton().click();
});

Cypress.Commands.add("editPost", (title, newTitle, content) => {
    publishedPostsPage.getAllPostTitles().contains(title).click({force: true});
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


Cypress.Commands.add("deleteAllPosts", () => {
    publishedPostsPage.getAllPostsTitleText().each(($el, index, $list) => {
        cy.deletePost($el.text().trim());
    });
});


Cypress.Commands.add("deleteAllMembers", () => {
    memberPage.getAllMembersListNames().each(($el, index, $list) => {
        cy.deleteMember($el.text().trim());
    });
});


Cypress.Commands.add("createPage", (title, content) => {
    pagesPage.getNewPageButton().click();
    pagesPage.getPageTitleInput().type(title);
    pagesPage.getPageContentInput().type(content);
    pagesPage.getPublishPageButton().click();
    postPage.getContinueButtonModal().click();
    postPage.getConfirmPublishButtonModal().click();
});


Cypress.Commands.add("deletePage", (title) => {
    pagesPage.getAllPagesTitle().contains(title).click({force: true});
    pagesPage.getSideMenuButton().click();
    pagesPage.getSideMenuDeleteButton().click();
    modalPage.getConfirmDeleteButton().click();
});


Cypress.Commands.add("deleteAllPages", () => {
    pagesPage.getAllPagesTitleText().each(($el, index, $list) => {
        cy.deletePage($el.text().trim());
    });
});




// OLD GHOST
Cypress.Commands.add("deleteMemberOld", (name) => {
    memberPage.getMemberLink(name).click({force: true});
    cy.wait(1000)
    memberDetailPage.getDropdownButton().click();
    cy.wait(1000)
    memberDetailPage.getDeleteButton().click();
    cy.wait(1000)
    modalPage.getConfirmDeleteButton().click();
});


Cypress.Commands.add("deleteAllMembersOld", () => {
    memberPage.getAllMembersListNames().each(($el, index, $list) => {
        cy.deleteMemberOld($el.text().trim());
    });
});



Cypress.Commands.add("createMemberOld", (name, email, note) => {
    memberPage.getNewMemberButton().click();
    memberDetailPage.getMemberNameInput().type(name, {force: true});
    memberDetailPage.getMemberEmailInput().type(email, {force: true});
    memberDetailPage.getNoteInput().type(note, {force: true});
    memberDetailPage.getSaveButton().click({force: true});
});



Cypress.Commands.add("createPostOld", (title, content) => {
    postPage.getPostTitleInput().type(title);
    postPage.getPostContentInput().type(content);
    postPage.getPublishPostButtonOld().click();
    postPage.getContinueButtonModalOld().click();
    postPage.getConfirmPublishButtonModalOld().click();
});

Cypress.Commands.add("editPostOld", (title, newTitle, content) => {
    publishedPostsPage.getAllPostTitles().contains(title).click({force: true});
    postPage.getPostTitleInput().clear().type(newTitle);
    postPage.getPostContentInput().clear().type(content);
    postPage.getPublishPostButtonOld().click();
    postPage.getContinueButtonModalOld().click();
});

