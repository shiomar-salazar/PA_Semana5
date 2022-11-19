import { AdminPage } from "../../pageObject/adminPage";
import { PublishedPostsPage } from "../../pageObject/publishedPostsPage";
import { MemberPage } from "../../pageObject/membersPage";
const adminPage = new AdminPage();
const publishedPostsPage = new PublishedPostsPage();
const memberPage = new MemberPage();

describe('Ghost tests', () => {
   
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost')
        cy.screenshot();

        cy.login(Cypress.env('username'), Cypress.env('password'));
        cy.wait(1000);

        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.createPost('post to update', 'This is a post to update');
        cy.wait(1000)
        adminPage.navigateToMainPage();
        adminPage.navigateToMembersPage();
        cy.createMember('user to delete', 'test@test1.com', 'This is a test member');
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        adminPage.navigateToMembersPage();
        cy.deleteAllMembers();
        cy.wait(1000);
    })


    it('3. Despues de hacer Login, quiero Agregar un nuevo Miembro y Editar un Post existente y Eliminar un Post existente y espero que todos los pasos se puedan ejecutar correctamente', () => {
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        cy.screenshot();
        cy.createMember('test 2', 'test2@test.com', 'This is a test member 2');
        cy.screenshot();
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        cy.screenshot();
        cy.reload();

        memberPage.getMembersList().contains('test 2').should('exist');

        adminPage.navigateToPostsPage();
        cy.screenshot();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)
        cy.screenshot();

        cy.editPost('post to update', 'post editado', 'This is my first post edited');
        cy.wait(500)
        cy.screenshot();
        adminPage.navigateToPostsPage();
        cy.screenshot();
        adminPage.getPublishedPostsButton().click();
        cy.screenshot();
        publishedPostsPage.getAllPostTitles().contains('post editado').should('exist');

        cy.deletePost('post editado');
        cy.wait(1000)
        cy.screenshot();
        adminPage.navigateToPostsPage();
        cy.screenshot();
        adminPage.getPublishedPostsButton().click();
        cy.screenshot();
        publishedPostsPage.getAllPostTitles().should('not.exist')
    });
});