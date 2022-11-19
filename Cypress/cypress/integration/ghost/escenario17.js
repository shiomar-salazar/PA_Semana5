import { AdminPage } from "../../pageObject/adminPage";
import { PublishedPostsPage } from "../../pageObject/publishedPostsPage";
import { MemberPage } from "../../pageObject/membersPage";
const adminPage = new AdminPage();
const publishedPostsPage = new PublishedPostsPage();
const memberPage = new MemberPage();

describe('Ghost tests', () => {
    
    beforeEach(() => {
        /* Given I log in into Ghost admin */
        cy.visit('http://localhost:2368/ghost')
        cy.screenshot();
        cy.login(Cypress.env('username'), Cypress.env('password'));
        cy.wait(1000);
    })

    afterEach(() => {
        /* Clean Up after test */
        adminPage.navigateToMembersPage();
        cy.deleteAllMembers();
        cy.wait(1000);
        adminPage.navigateToPostsPage();
        cy.deletePost('My seconds of 2 posts');
        cy.wait(1000)
    })

    it('17. Despues de hacer Login, quiero Agregar un nuevo Miembro y Crear un nuevo Post y Crear un nuevo Post y Eliminar un Post existente y espero que todos los pasos se puedan ejecutar correctamente', () => {
        /* When I create a new member */
        adminPage.navigateToMembersPage();
        cy.screenshot();
        cy.createMember('John Doe', 'test@test.com', 'This is a test member');
        cy.screenshot();
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        cy.screenshot();
        cy.reload();

        /* And I create a new Post */
        adminPage.navigateToMainPage();
        cy.screenshot();
        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.screenshot();
        cy.createPost('My first of 2 posts', 'This is the first of two post for this test');
        cy.screenshot();

        /* And I Creat a New Post */
        adminPage.navigateToMainPage();
        cy.wait(1000)
        cy.screenshot();
        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.screenshot();
        cy.createPost('My seconds of 2 posts', 'This is the second of two post for this test');
        cy.screenshot();
        adminPage.navigateToPostsPage();
        cy.screenshot();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)
        cy.screenshot();

        /* And I delete the first created Post */
        adminPage.navigateToPostsPage();
        cy.screenshot();
        cy.deletePost('My first of 2 posts');
        cy.wait(1000)
        cy.screenshot();
        
        /* Then I except to be able to see the new member */
        adminPage.navigateToMembersPage();
        cy.screenshot();
        memberPage.getFirstMemberName().should(($name) => {
            expect($name).to.contain('John Doe');
        })

        /* And I expect to still see the second post created */
        adminPage.navigateToPostsPage();
        cy.screenshot();
        adminPage.getPublishedPostsButton().click();
        cy.screenshot();
        publishedPostsPage.getAllPostTitles().contains('My seconds of 2 posts').should('exist');


    })
})