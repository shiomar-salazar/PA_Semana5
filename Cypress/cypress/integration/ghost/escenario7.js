import { AdminPage } from "../../pageObject/adminPage";
import { PublishedPostsPage } from "../../pageObject/publishedPostsPage";
import { MemberPage } from "../../pageObject/membersPage";
const adminPage = new AdminPage();
const publishedPostsPage = new PublishedPostsPage();
const memberPage = new MemberPage();

describe('Ghost tests', () => {
   
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost')

        cy.login(Cypress.env('username'), Cypress.env('password'));
        cy.wait(1000);

        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.createPost('post to delete', 'This is a post to delete');
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.deleteAllPosts()
        cy.wait(1000);

        adminPage.navigateToMainPage();
        adminPage.navigateToMembersPage();
        cy.createMember('user to delete', 'test@test1.com', 'This is a test member');
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        adminPage.navigateToMembersPage();
        cy.deleteAllMembers();
        cy.wait(1000);
    })


    it('7. Despues de hacer Login, quiero Agregar un nuevo Miembro y Agregar un nuevo Miembro y Eliminar un Miembro existente y espero que todos los pasos se puedan ejecutar correctamente', () => {
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        cy.createMember('test 3', 'test3@test.com', 'This is a test member 3');
        adminPage.navigateToMembersPage();
        cy.wait(1000)

        memberPage.getMembersList().contains('test 3').should('exist');

        cy.createMember('test 4', 'test4@test.com', 'This is a test member 4');
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        memberPage.getMembersList().contains('test 4').should('exist');

        cy.deleteMember('test 4');
        cy.wait(1000)

        memberPage.getMembersList().contains('test 4').should('not.exist');
    });
});