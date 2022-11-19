import { AdminPage } from "../../pageObject/adminPage";
import { PublishedPostsPage } from "../../pageObject/publishedPostsPage";
import { MemberPage } from "../../pageObject/membersPage";
const adminPage = new AdminPage();
const publishedPostsPage = new PublishedPostsPage();
const memberPage = new MemberPage();

describe('Ghost tests', () => {
   
    beforeEach(() => {
        cy.visit(Cypress.env('ghost3url'));
        cy.screenshot('screenshot_1');

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
        cy.wait(1000)
        adminPage.navigateToMembersPageOld();
        cy.wait(1000)
        adminPage.navigateToMembersPageOld();
        cy.deleteAllMembersOld();
        cy.wait(1000);
    })

    afterEach(() => {
        /* Clean Up after test */
        adminPage.navigateToPostsPageOld();
        cy.deletePost('My first post edited');
        cy.wait(1000)
    })


    it('4. Despues de hacer Login, quiero Eliminar un Miembro existente y Crear un nuevo Post y Editar un Post existente y espero que se valide la lista de miebros vacia y no arroje excepciones y los pasos se terminen', () => {
        cy.wait(1000)
        adminPage.navigateToMembersPageOld();
        cy.screenshot('screenshot_2');
        memberPage.getMembersList().should('not.exist');

        adminPage.navigateToMainPageOld();
        cy.screenshot('screenshot_3');
        adminPage.getNewPostButtonOld().click();
        cy.screenshot('screenshot_4');
        cy.wait(1000)
        cy.createPostOld('My first post', 'This is my first post');
        cy.screenshot('screenshot_5');

        adminPage.navigateToPostsPageOld();
        cy.screenshot('screenshot_6');
        adminPage.getPublishedPostsButton().click();
        cy.screenshot('screenshot_7');
        cy.wait(1000)
        publishedPostsPage.getAllPostTitles().contains('My first post').should('exist');

        adminPage.navigateToPostsPageOld();
        cy.screenshot('screenshot_8');
        cy.editPostOld('My first post', 'My first post edited', 'This is my first post edited');
        cy.screenshot('screenshot_9');
        cy.wait(500)
        adminPage.navigateToPostsPageOld();
        cy.screenshot('screenshot_10');
        adminPage.getPublishedPostsButton().click();
        cy.screenshot('screenshot_11');
        publishedPostsPage.getAllPostTitles().contains('My first post edited').should('exist');
    });
});