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
        adminPage.navigateToPostsPage();
        cy.deletePost('My Test Post # 19');
        cy.wait(1000)
    })

    it('19. Despues de hacer Login, quiero Editar un Post existente y Agregar un nuevo Miembro y Crear un nuevo Post y Eliminar un Miembro existente y espero que todos los pasos se puedan ejecutar correctamente', () => {
        /* When I edit a post */
        adminPage.navigateToPostsPage();
        cy.screenshot();
        adminPage.getPublishedPostsButton().click();
        cy.screenshot();
        publishedPostsPage.getAllPostTitles().should('not.exist')

        /* And add a new member */
        adminPage.navigateToMembersPage();
        cy.screenshot();
        cy.createMember('John Doe', 'test@test.com', 'This is a test member');
        cy.screenshot();
        adminPage.navigateToMembersPage();
        cy.screenshot();
        cy.wait(1000)
        cy.reload();

        /* And I create a new Post */
        adminPage.navigateToMainPage();
        cy.screenshot();
        adminPage.getNewPostButton().click();
        cy.screenshot();
        cy.wait(1000)
        cy.createPost('My Test Post # 19', 'This is the post for this test');
        cy.screenshot();
        adminPage.navigateToPostsPage();
        cy.screenshot();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)        
        cy.screenshot();

        /* And I delete an existing member */
        adminPage.navigateToMembersPage();
        cy.screenshot();
        cy.deleteMember('John Doe');
        cy.wait(1000)
        cy.screenshot();

        /* Then I expect to still be able to see the created post */
        adminPage.navigateToPostsPage();
        cy.screenshot();
        adminPage.getPublishedPostsButton().click();
        cy.screenshot();
        publishedPostsPage.getAllPostTitles().contains('My Test Post # 19').should('exist');
    })
})