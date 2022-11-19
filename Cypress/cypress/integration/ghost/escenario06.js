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
        cy.createPost('post to delete', 'This is a post to delete');
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.deleteAllPosts()
        cy.wait(1000);

        adminPage.navigateToMainPage();
        adminPage.navigateToMembersPage();
        cy.createMember('user to delete', 'test@test1.com', 'This is a test member');
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        adminPage.navigateToMembersPage();
        cy.deleteAllMembers();
        cy.wait(1000);
    })


    it('6. Despues de hacer Login, quiero Crear un nuevo Post y Crear un nuevo Post y Eliminar un Post existente y Editar un Post existente y espero que todos los pasos se puedan ejecutar correctamente', () => {
        adminPage.navigateToMainPage();
        cy.screenshot();
        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.screenshot();
        cy.createPost('My fifth post', 'This is my fifth post');
        cy.screenshot();

        adminPage.navigateToMainPage();
        cy.screenshot();
        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.screenshot();
        cy.createPost('My sixth post', 'This is my sixth post');
        cy.screenshot();

        adminPage.navigateToPostsPage();
        cy.screenshot();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)
        cy.screenshot();

        cy.deletePost('My sixth post');
        cy.wait(1000)
        cy.screenshot();
        adminPage.navigateToPostsPage();
        cy.screenshot();
        adminPage.getPublishedPostsButton().click();
        cy.screenshot();
        publishedPostsPage.getAllPostTitles().contains('My sixth post').should('not.exist');
        cy.wait(1000)

        
        cy.editPost('My fifth post', 'My fifth post edited', 'This is my fifth post edited');
        cy.wait(1000)
        cy.screenshot();
        adminPage.navigateToPostsPage();
        cy.screenshot();
        adminPage.getPublishedPostsButton().click();
        cy.screenshot();
        publishedPostsPage.getAllPostTitles().contains('My fifth post edited').should('exist');
    });
});