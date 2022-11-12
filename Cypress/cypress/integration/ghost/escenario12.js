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
        cy.deletePost('My twelfth post');
        cy.wait(1000)
    })

    it('12. Despues de hacer Login, quiero Agregar un nuevo Miembro y Crear un nuevo Post y Agregar un nuevo Miembro y espero que todos los pasos se puedan ejecutar correctamente', () => {
        /* When I add a new member */
        adminPage.navigateToMembersPage();
        cy.createMember('John Doe', 'test@test.com', 'This is a test member');
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        cy.reload();

        /* And I create a new post */
        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.createPost('My twelfth post', 'This is my twelfth post');
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)

        /* And I create a new member */
        adminPage.navigateToMembersPage();
        cy.createMember('John Ford', 'Ford@test.com', 'This is a second member');
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        cy.reload();

        /* Then I expect to see the the two new members */
        adminPage.navigateToMembersPage();
        memberPage.getAllMembersListNames().contains('John Doe').should('exist');
        memberPage.getAllMembersListNames().contains('John Ford').should('exist');

        /* And I expect to see the new post */
        adminPage.navigateToPostsPage();
        publishedPostsPage.getAllPostTitles().contains('My twelfth post').should('exist');
    })
})