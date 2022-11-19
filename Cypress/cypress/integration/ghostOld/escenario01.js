import { AdminPage } from "../../pageObject/adminPage";
import { PublishedPostsPage } from "../../pageObject/publishedPostsPage";
import { MemberPage } from "../../pageObject/membersPage";

const adminPage = new AdminPage();
const publishedPostsPage = new PublishedPostsPage();
const memberPage = new MemberPage();


describe('Ghost tests', () => {
   
    beforeEach(() => {
        cy.visit(Cypress.env('ghost3url'));
        cy.wait(500);
        cy.screenshot('screenshot_1');

        cy.login(Cypress.env('username'), Cypress.env('password'));
        cy.wait(1000);

        adminPage.getNewPostButtonOld().click();
        cy.wait(1000)
        cy.createPostOld('post to delete', 'This is a post to delete');
        adminPage.navigateToPostsPageOld();
        adminPage.getPublishedPostsButton().click();
        cy.deleteAllPosts()
        cy.wait(1000);

        adminPage.navigateToMainPageOld();
        cy.wait(1000);
        adminPage.navigateToMembersPageOld();
        cy.createMemberOld('user to delete', 'test@test1.com', 'This is a test member');
        cy.wait(1000)
        adminPage.navigateToMembersPageOld();
        cy.wait(1000)
        adminPage.navigateToMembersPageOld();
        cy.deleteAllMembersOld();
        cy.wait(1000);
    })


    it('user create a new post and invite a new member', () => {
        adminPage.getNewPostButtonOld().click();
        cy.wait(500);
        cy.screenshot('screenshot_2');
        cy.wait(1000)
        cy.createPostOld('My first post', 'This is my first post');
        cy.wait(500);
        cy.screenshot('screenshot_3');

        adminPage.navigateToPostsPageOld();
        cy.wait(500);
        cy.screenshot('screenshot_4');
        adminPage.getPublishedPostsButton().click();
        cy.wait(500);
        cy.screenshot('screenshot_5');
        cy.wait(1000)

        publishedPostsPage.getAllPostTitles().contains('My first post').should('exist');
        cy.wait(1000)

        adminPage.navigateToMembersPageOld();
        cy.wait(500);
        cy.screenshot('screenshot_6');
        
        cy.createMemberOld('John Doe', 'test@test.com', 'This is a test member');
        cy.wait(500);
        cy.screenshot('screenshot_7');
        cy.wait(1000)
        adminPage.navigateToMembersPageOld();
        cy.wait(500);
        cy.screenshot('screenshot_8');
        cy.wait(1000)

        memberPage.getMembersList().contains('John Doe').should('exist');
    });
});


