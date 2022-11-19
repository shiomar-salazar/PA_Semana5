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

    afterEach(() => {
        /* Clean Up after test */
        adminPage.navigateToPostsPage();
        cy.deletePost('My tenth post edited');
        cy.wait(1000)
    })


    it('10. Despues de hacer Login, quiero Agregar un nuevo Miembro y Crear un nuevo Post y Editar un Post existente y Eliminar un Miembro existente y espero que todos los pasos se puedan ejecutar correctamente', () => {
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        cy.screenshot();
        cy.createMember('test 6', 'test6@test.com', 'This is a test member 6');
        cy.wait(1000)
        cy.screenshot();
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        cy.screenshot();

        memberPage.getMembersList().contains('test 6').should('exist');

        adminPage.navigateToMainPage();
        cy.screenshot();
        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.screenshot();
        cy.createPost('My tenth post', 'This is my tenth post');
        cy.screenshot();

        adminPage.navigateToPostsPage();
        cy.screenshot();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)
        cy.screenshot();

        cy.editPost('My tenth post', 'My tenth post edited', 'This is my tenth post edited');
        cy.wait(500)
        cy.screenshot();
        adminPage.navigateToPostsPage();
        cy.screenshot();
        adminPage.getPublishedPostsButton().click();
        cy.screenshot();
        publishedPostsPage.getAllPostTitles().contains('My tenth post edited').should('exist');

        cy.wait(1000)
        adminPage.navigateToMembersPage();
        cy.screenshot();
        cy.deleteMember('test 6');
        cy.wait(1000)
        cy.screenshot();

        memberPage.getMembersList().should('not.exist')
    });
});