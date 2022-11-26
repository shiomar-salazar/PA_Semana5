import { AdminPage } from "../../pageObject/adminPage";
import { PublishedPostsPage } from "../../pageObject/publishedPostsPage";
import { MemberPage } from "../../pageObject/membersPage";
const adminPage = new AdminPage();
const publishedPostsPage = new PublishedPostsPage();
const memberPage = new MemberPage();

describe('Ghost tests', () => {
   
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost')
        cy.wait(500);
        cy.screenshot('screenshot_1');

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


    it('2. delete member and edit post', () => {
        cy.wait(1000)
        adminPage.navigateToMembersPage();
        cy.wait(500);
        cy.screenshot('screenshot_2');
        memberPage.getMembersList().should('not.exist');


        adminPage.navigateToPostsPage();
        cy.wait(500);
        cy.screenshot('screenshot_3');
        adminPage.getPublishedPostsButton().click();
        cy.wait(500);
        cy.screenshot('screenshot_4');
        publishedPostsPage.getAllPostTitles().should('not.exist')
    });
});