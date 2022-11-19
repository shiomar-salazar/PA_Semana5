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
    })

    it('14. Despues de hacer Login, quiero Agregar un nuevo Miembro y Eliminar un Post existente y Eliminar un Post existente y espero que todos los pasos se puedan ejecutar correctamente', () => {
        /* When I add a new member */
        adminPage.navigateToMembersPage();
        cy.screenshot();
        cy.createMember('John Doe', 'test@test.com', 'This is a test member');
        cy.screenshot();
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        cy.screenshot();
        cy.reload();

        /* And I delete an existing post */
        adminPage.navigateToPostsPage();
        cy.screenshot();
        publishedPostsPage.getPublishedPosts().should('not.exist');

        /* And I delete and Existing Post */
        adminPage.navigateToPostsPage();
        cy.screenshot();
        publishedPostsPage.getPublishedPosts().should('not.exist');

        /* Then I expect to still see the new member added */
        adminPage.navigateToMembersPage();
        cy.screenshot();
        memberPage.getAllMembersListNames().contains('John Doe').should('exist');

    })
})