import { AdminPage } from "../../pageObject/adminPage";
import { PublishedPostsPage } from "../../pageObject/publishedPostsPage";
import { MemberPage } from "../../pageObject/membersPage";
const adminPage = new AdminPage();
const publishedPostsPage = new PublishedPostsPage();
const memberPage = new MemberPage();

describe('Ghost tests', () => {
   
    beforeEach(() => {
        cy.visit(Cypress.env('ghost3url'));

        cy.login(Cypress.env('username'), Cypress.env('password'));
        cy.wait(1000);

        adminPage.getNewPostButtonOld().click();
        cy.wait(1000)
        cy.createPostOld('post to delete', 'This is a post to delete');
        adminPage.navigateToPostsPageOld();
        adminPage.getPublishedPostsButton().click();
        cy.deleteAllPosts()
        cy.wait(1000);

        adminPage.navigateToMainPageOld();
        adminPage.navigateToMembersPageOld();
        cy.createMemberOld('user to delete', 'test@test1.com', 'This is a test member');
        adminPage.navigateToMembersPageOld();
        cy.wait(1000)
        adminPage.navigateToMembersPageOld();
        cy.deleteAllMembersOld();
        cy.wait(1000);
    })


    it('4. Despues de hacer Login, quiero Eliminar un Miembro existente y Crear un nuevo Post y Editar un Post existente y espero que se valide la lista de miebros vacia y no arroje excepciones y los pasos se terminen', () => {
        cy.wait(1000)
        adminPage.navigateToMembersPageOld();
        memberPage.getMembersList().should('not.exist');
        cy.screenshot();

        adminPage.navigateToPostsPageOld();
        adminPage.getNewPostButtonOld().click();
        cy.wait(1000)
        cy.createPostOld('My first post', 'This is my first post');

        adminPage.navigateToPostsPageOld();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)
        publishedPostsPage.getAllPostTitles().contains('My first post').should('exist');
        cy.screenshot();

        adminPage.navigateToPostsPageOld();
        cy.editPostOld('My first post', 'My first post edited', 'This is my first post edited');
        cy.wait(500)
        adminPage.navigateToPostsPageOld();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().contains('My first post edited').should('exist');
        cy.screenshot();
    });
});