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
        /* Clean enviroment */
        adminPage.navigateToMembersPage();
        cy.deleteAllMembers();
        cy.wait(1000);

        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.deleteAllPosts()
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
        cy.createPost('My eleventh post', 'This is my eleventh post');
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)
        publishedPostsPage.getFirstPostTitle().should(($title) => {
            expect($title).to.contain('My eleventh post');
        })

        /* And I add a new member */
        adminPage.navigateToMembersPage();
        cy.createMember('John Doe', 'test@test.com', 'This is a test member');
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        cy.reload();

        /* And I edit an existing post */
        adminPage.navigateToPostsPage();
        cy.editPost('My eleventh post', 'post editado', 'My eleventh post was editted');
        cy.wait(500)
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().contains('post editado').should('exist');

        /* And I delete an existing post */
        cy.deletePost('post editado');
        cy.wait(1000)
        
        /* Then I verify the post is no longer there */
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().should('not.exist')

        /* And the member is still register */
        adminPage.navigateToMembersPage();
        memberPage.getFirstMemberName().should(($name) => {
            expect($name).to.contain('John Doe');
        })
    });
});