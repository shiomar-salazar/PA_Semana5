import { AdminPage } from "../../pageObject/adminPage";
import { PublishedPostsPage } from "../../pageObject/publishedPostsPage";
import { MemberPage } from "../../pageObject/membersPage";

const adminPage = new AdminPage();
const publishedPostsPage = new PublishedPostsPage();
const memberPage = new MemberPage();


describe('Ghost old tests', () => {
   
    beforeEach(() => {
        /* Given I log in into Ghost admin */
        cy.visit(Cypress.env('ghost3url'));
        cy.login(Cypress.env('username'), Cypress.env('password'));
        cy.wait(1000); 
    })

    afterEach(() => {
        /* Clean Up after test */
        adminPage.navigateToPostsPageOld();
        cy.deletePost('My second of 3 posts');
        cy.wait(1000)
        cy.deletePost('post editado');
        cy.wait(1000)
        cy.deletePost('My first of 3 posts');
        cy.wait(1000)
    })



    it('15. Despues de hacer Login, quiero Crear un nuevo Post y Crear un nuevo Post y Crear un nuevo Post y Editar un Post existente y espero que todos los pasos se puedan ejecutar correctamente', () => {
        /*When I create a new Post */
        adminPage.navigateToMainPageOld();
        adminPage.getNewPostButtonOld().click();
        cy.wait(1000)
        cy.createPostOld('My first of 3 posts', 'This is the first of three post for this test');

        /* And I create a new Post */
        adminPage.navigateToMainPageOld();
        adminPage.getNewPostButtonOld().click();
        cy.wait(1000)
        cy.createPostOld('My second of 3 posts', 'This is the second of three post for this test');

        /* And I create a new Post */
        adminPage.navigateToMainPageOld();
        adminPage.getNewPostButtonOld().click();
        cy.wait(1000)
        cy.createPostOld('My Third of 3 posts', 'This is the Third of three post for this test');
        adminPage.navigateToPostsPageOld();
        adminPage.getNewPostButtonOld().click();
        cy.wait(1000)

        /* And I edit an existing Post */
        adminPage.navigateToPostsPageOld();
        cy.editPostOld('My Third of 3 posts', 'post editado', 'My last  post was editted');
        cy.wait(500)

        /* Then I expect to see all thre post */
        adminPage.navigateToPostsPageOld();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().contains('post editado').should('exist');
        publishedPostsPage.getAllPostTitles().contains('My first of 3 posts').should('exist');
        publishedPostsPage.getAllPostTitles().contains('My second of 3 posts').should('exist');
       
    });
});


