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
    })

    it('13. Despues de hacer Login, quiero Agregar un nuevo Miembro y Eliminar un Miembro existente y Eliminar un Miembro existente y espero que todos los pasos se puedan ejecutar correctamente', () => {
        /* When I created a new Member */
        adminPage.navigateToMembersPage();
        cy.createMember('John Doe', 'test@test.com', 'This is a test member');
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        cy.reload();

        /*And I delete a existing member */
        adminPage.navigateToMembersPage();
        cy.deleteMember('John Doe');
        cy.wait(1000)

        /*And I delete a existing member */
        cy.wait(1000)
        adminPage.navigateToMembersPage();
        memberPage.getMembersList().should('not.exist');

        /* When I expect to not have any members or exceptions */
        cy.wait(1000)
        adminPage.navigateToMembersPage();
        memberPage.getMembersList().should('not.exist');
        
    })
})