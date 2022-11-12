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
        cy.deleteMember('John Doe');
        cy.wait(1000);
        adminPage.navigateToPostsPage();
        cy.deletePost('post editado');
        cy.wait(1000)
    })

    it('18. Despues de hacer Login, quiero Agregar un nuevo Miembro y Editar un Post existente y Crear un nuevo Post y Editar un Post existente y espero que todos los pasos se puedan ejecutar correctamente', () => {
        /* When I add a new member */
        adminPage.navigateToMembersPage();
        cy.createMember('John Doe', 'test@test.com', 'This is a test member');
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        cy.reload();

        /* And I edit an exisiting post */
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().should('not.exist')

        /* And I create a new post */
        adminPage.navigateToMainPage();
        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.createPost('My Test Post # 18', 'This is the post for this test');
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)

        /* And I edit an exisiting Post */
        cy.editPost('My Test Post # 18', 'post editado', 'This is my the test post edited');
        cy.wait(500)

        /* Then I expect to see the modification of created post */
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().contains('post editado').should('exist');

        /* And I expect to see the added member */
        adminPage.navigateToMembersPage();
        memberPage.getFirstMemberName().should(($name) => {
            expect($name).to.contain('John Doe');
        })

    })
})