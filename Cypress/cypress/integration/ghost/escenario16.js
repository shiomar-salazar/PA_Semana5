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
        cy.wait(500);
        cy.screenshot('screenshot_1');
        cy.login(Cypress.env('username'), Cypress.env('password'));
        cy.wait(1000);
        
    })

    afterEach(() => {
        /* Clean Up after test */
    })

    it('16. Despues de hacer Login, quiero Crear un nuevo Post y Eliminar un Post existente y Editar un Post existente y Eliminar un Post existente y espero que todos los pasos se puedan ejecutar correctamente', () => {
        /* When I add a new post */
        adminPage.navigateToMainPage();
        cy.wait(500);
        cy.screenshot('screenshot_2');
        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.createPost('My Test Post # 16', 'This is the post for this test');
        cy.wait(500);
        cy.screenshot('screenshot_3');
        adminPage.navigateToPostsPage();
        cy.wait(500);
        cy.screenshot('screenshot_4');
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)

        /* And I delete an existing post */
        adminPage.navigateToPostsPage();
        cy.wait(500);
        cy.screenshot('screenshot_5');
        cy.deletePost('My Test Post # 16');
        cy.wait(500);
        cy.screenshot('screenshot_6');
        cy.wait(1000)

        /* And I edit an exisiting post */
        adminPage.navigateToPostsPage();
        cy.wait(500);
        cy.screenshot('screenshot_7');
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().should('not.exist')
        cy.wait(500);
        cy.screenshot('screenshot_8');


        /* And I Delete and Existing post */
        adminPage.navigateToPostsPage();
        cy.wait(500);
        cy.screenshot('screenshot_9');
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().should('not.exist')
        cy.wait(500);
        cy.screenshot('screenshot_10');

        /* Then I expect to see no post in the list */
        adminPage.navigateToPostsPage();
        cy.wait(500);
        cy.screenshot('screenshot_11');
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().should('not.exist')
        cy.wait(500);
        cy.screenshot('screenshot_12');
    })
})