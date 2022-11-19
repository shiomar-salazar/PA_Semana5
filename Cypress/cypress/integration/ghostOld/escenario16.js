import { AdminPage } from "../../pageObject/adminPage";
import { PublishedPostsPage } from "../../pageObject/publishedPostsPage";
import { MemberPage } from "../../pageObject/membersPage";

const adminPage = new AdminPage();
const publishedPostsPage = new PublishedPostsPage();
const memberPage = new MemberPage();


describe('Ghost Old tests', () => {
   
    beforeEach(() => {
        /* Given I log in into Ghost admin */
        cy.visit(Cypress.env('ghost3url'));
        cy.login(Cypress.env('username'), Cypress.env('password'));
        cy.wait(1000);
    })

    afterEach(() => {
        /* Clean Up after test */
    })


    it('16. Despues de hacer Login, quiero Crear un nuevo Post y Eliminar un Post existente y Editar un Post existente y Eliminar un Post existente y espero que todos los pasos se puedan ejecutar correctamente', () => {
        /* When I add a new post */
        adminPage.navigateToMainPageOld();
        adminPage.getNewPostButtonOld().click();
        cy.wait(1000)
        cy.createPostOld('My Test Post # 16', 'This is the post for this test');
        adminPage.navigateToPostsPageOld();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)

        /* And I delete an existing post */
        adminPage.navigateToPostsPageOld();
        cy.deletePost('My Test Post # 16');
        cy.wait(1000)

        /* And I edit an exisiting post */
        adminPage.navigateToPostsPageOld();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().should('not.exist')

        /* And I Delete an Existing post */
        adminPage.navigateToPostsPageOld();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().should('not.exist')

        /* Then I expect to see no post in the list */
        adminPage.navigateToPostsPageOld();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().should('not.exist')
        cy.screenshot();
    });
});


