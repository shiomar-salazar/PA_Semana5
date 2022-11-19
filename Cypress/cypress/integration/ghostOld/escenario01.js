import { AdminPage } from "../../pageObject/adminPage";
import { PublishedPostsPage } from "../../pageObject/publishedPostsPage";
import { MemberPage } from "../../pageObject/membersPage";

const adminPage = new AdminPage();
const publishedPostsPage = new PublishedPostsPage();
const memberPage = new MemberPage();


describe('Ghost tests', () => {
   
    beforeEach(() => {
        cy.visit(Cypress.env('ghost3url'));

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
        cy.wait(1000)
        adminPage.navigateToMembersPageOld();
        cy.wait(1000)
        adminPage.navigateToMembersPageOld();
        cy.deleteAllMembersOld();
        cy.wait(1000);
    })


    it('user create a new post and invite a new member', () => {
        adminPage.getNewPostButtonOld().click();
        cy.wait(1000)
        cy.createPostOld('My first post', 'This is my first post');

        adminPage.navigateToPostsPageOld();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)

        publishedPostsPage.getAllPostTitles().contains('My first post').should('exist');
        cy.wait(1000)

        adminPage.navigateToMembersPageOld();
        
        cy.createMemberOld('John Doe', 'test@test.com', 'This is a test member');
        cy.wait(1000)
        adminPage.navigateToMembersPageOld();
        cy.wait(1000)

        memberPage.getMembersList().contains('John Doe').should('exist');
    });
});


