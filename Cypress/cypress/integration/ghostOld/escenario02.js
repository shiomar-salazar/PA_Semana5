import { AdminPage } from "../../pageObject/adminPage";
import { PublishedPostsPage } from "../../pageObject/publishedPostsPage";
import { MemberPage } from "../../pageObject/membersPage";
const adminPage = new AdminPage();
const publishedPostsPage = new PublishedPostsPage();
const memberPage = new MemberPage();

describe('Ghost tests', () => {
   
    beforeEach(() => {
        cy.visit(Cypress.env('ghost3url'));
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
        adminPage.navigateToMembersPageOld();
        cy.createMemberOld('user to delete', 'test@test1.com', 'This is a test member');
        adminPage.navigateToMembersPageOld();
        cy.wait(1000)
        adminPage.navigateToMembersPageOld();
        cy.deleteAllMembersOld();
        cy.wait(1000);
    })


    it('2. delete member and edit post', () => {
        cy.wait(1000)
        adminPage.navigateToMembersPageOld();
        cy.screenshot('screenshot_2');
        memberPage.getMembersList().should('not.exist');


        adminPage.navigateToMembersPageOld();
        cy.screenshot('screenshot_3');
        adminPage.getPublishedPostsButton().click();
        cy.screenshot('screenshot_4');
        publishedPostsPage.getAllPostTitles().should('not.exist')
    });
});