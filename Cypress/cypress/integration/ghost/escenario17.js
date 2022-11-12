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
        cy.createMember('John Doe', 'test@test.com', 'This is a test member');
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        cy.reload();

        /* And I create a new Post */
        adminPage.navigateToMainPage();
        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.createPost('My first of 2 posts', 'This is the first of two post for this test');

        /* And I Creat a New Post */
        adminPage.navigateToMainPage();
        cy.wait(1000)
        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.createPost('My seconds of 2 posts', 'This is the second of two post for this test');
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)

        /* And I delete the first created Post */
        adminPage.navigateToPostsPage();
        cy.deletePost('My first of 2 posts');
        cy.wait(1000)
        
        /* Then I except to be able to see the new member */
        adminPage.navigateToMembersPage();
        memberPage.getFirstMemberName().should(($name) => {
            expect($name).to.contain('John Doe');
        })

        /* And I expect to still see the second post created */
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().contains('My seconds of 2 posts').should('exist');


    })
})