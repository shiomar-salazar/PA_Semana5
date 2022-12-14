import { AdminPage } from "../../pageObject/adminPage";
import { PublishedPostsPage } from "../../pageObject/publishedPostsPage";
import { MemberPage } from "../../pageObject/membersPage";
const adminPage = new AdminPage();
const publishedPostsPage = new PublishedPostsPage();
const memberPage = new MemberPage();

describe('Ghost tests', () => {
   
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost')
        cy.wait(500);
        cy.screenshot('screenshot_1');

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

    afterEach(() => {
        /* Clean Up after test */
        adminPage.navigateToPostsPage();
        cy.deletePost('My first post edited');
        cy.wait(1000)
    })


    it('4. Despues de hacer Login, quiero Eliminar un Miembro existente y Crear un nuevo Post y Editar un Post existente y espero que se valide la lista de miebros vacia y no arroje excepciones y los pasos se terminen', () => {
        cy.wait(1000)
        adminPage.navigateToMembersPage();
        cy.wait(500);
        cy.screenshot('screenshot_2');
        memberPage.getMembersList().should('not.exist');

        adminPage.navigateToMainPage();
        cy.wait(500);
        cy.screenshot('screenshot_3');
        adminPage.getNewPostButton().click();
        cy.wait(500);
        cy.screenshot('screenshot_4');
        cy.wait(1000)
        cy.createPost('My first post', 'This is my first post');
        cy.wait(500);
        cy.screenshot('screenshot_5');

        adminPage.navigateToPostsPage();
        cy.wait(500);
        cy.screenshot('screenshot_6');
        adminPage.getPublishedPostsButton().click();
        cy.wait(500);
        cy.screenshot('screenshot_7');
        cy.wait(1000)
        publishedPostsPage.getAllPostTitles().contains('My first post').should('exist');

        adminPage.navigateToPostsPage();
        cy.wait(500);
        cy.screenshot('screenshot_8');
        cy.editPost('My first post', 'My first post edited', 'This is my first post edited');
        cy.wait(500);
        cy.screenshot('screenshot_9');
        cy.wait(500)
        adminPage.navigateToPostsPage();
        cy.wait(500);
        cy.screenshot('screenshot_10');
        adminPage.getPublishedPostsButton().click();
        cy.wait(500);
        cy.screenshot('screenshot_11');
        publishedPostsPage.getAllPostTitles().contains('My first post edited').should('exist');
    });
});