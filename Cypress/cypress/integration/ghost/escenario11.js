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

    it('11. Despues de hacer Login, quiero Crear un nuevo Post y Agregar un nuevo Miembro y Editar un Post existente y Eliminar un Post existente y espero que todos los pasos se puedan ejecutar correctamente', () => {
        /* When I add a new Post */
        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.screenshot();
        cy.createPost('My eleventh post', 'This is my eleventh post');
        cy.screenshot();
        adminPage.navigateToPostsPage();
        cy.screenshot();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)
        cy.screenshot();
        publishedPostsPage.getFirstPostTitle().should(($title) => {
            expect($title).to.contain('My eleventh post');
        })

        /* And I add a new member */
        adminPage.navigateToMembersPage();
        cy.screenshot();
        cy.createMember('John Doe', 'test@test.com', 'This is a test member');
        cy.screenshot();
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        cy.screenshot();
        cy.reload();

        /* And I edit an existing post */
        adminPage.navigateToPostsPage();
        cy.screenshot();
        cy.editPost('My eleventh post', 'post editado', 'My eleventh post was editted');
        cy.wait(500)
        cy.screenshot();
        adminPage.navigateToPostsPage();
        cy.screenshot();
        adminPage.getPublishedPostsButton().click();
        cy.screenshot();
        publishedPostsPage.getAllPostTitles().contains('post editado').should('exist');

        /* And I delete an existing post */
        cy.deletePost('post editado');
        cy.wait(1000)
        cy.screenshot();
        
        /* Then I verify the post is no longer there */
        adminPage.navigateToPostsPage();
        cy.screenshot();
        adminPage.getPublishedPostsButton().click();
        cy.screenshot();
        publishedPostsPage.getAllPostTitles().should('not.exist')

        /* And the member is still register */
        adminPage.navigateToMembersPage();
        cy.screenshot();
        memberPage.getFirstMemberName().should(($name) => {
            expect($name).to.contain('John Doe');
        })
    });
});