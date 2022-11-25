import { AdminPage } from "../../pageObject/adminPage";
import { PublishedPostsPage } from "../../pageObject/publishedPostsPage";
import { MemberPage } from "../../pageObject/membersPage";

const adminPage = new AdminPage();
const publishedPostsPage = new PublishedPostsPage();
const memberPage = new MemberPage();


describe('Ghost tests', () => {
   
    beforeEach(() => {
        cy.visit(Cypress.env('adminUrl'));
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
        cy.wait(1000);
        adminPage.navigateToMembersPage();
        cy.createMember('user to delete', 'test@test1.com', 'This is a test member');
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        adminPage.navigateToMembersPage();
        cy.deleteAllMembers();
        cy.wait(1000);
    })


    it('user create a new post and invite a new member', () => {
        adminPage.getNewPostButton().click();
        cy.wait(500);
        cy.screenshot('screenshot_2');
        cy.wait(1000)
        cy.createPost('My first post', 'This is my first post');
        cy.wait(500);
        cy.screenshot('screenshot_3');

        adminPage.navigateToPostsPage();
        cy.wait(500);
        cy.screenshot('screenshot_4');
        adminPage.getPublishedPostsButton().click();
        cy.wait(500);
        cy.screenshot('screenshot_5');
        cy.wait(1000)

        publishedPostsPage.getAllPostTitles().contains('My first post').should('exist');
        cy.wait(1000)

        adminPage.navigateToMembersPage();
        cy.wait(500);
        cy.screenshot('screenshot_6');
        
        cy.createMember('John Doe', 'test@test.com', 'This is a test member');
        cy.wait(500);
        cy.screenshot('screenshot_7');
        cy.wait(1000)
        adminPage.navigateToMembersPage();
        cy.wait(500);
        cy.screenshot('screenshot_8');
        cy.wait(1000)

        memberPage.getMembersList().contains('John Doe').should('exist');
    });
});