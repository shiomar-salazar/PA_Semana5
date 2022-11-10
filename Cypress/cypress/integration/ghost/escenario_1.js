import { AdminPage } from "../../pageObject/adminPage";
import { PublishedPostsPage } from "../../pageObject/publishedPostsPage";
import { MemberPage } from "../../pageObject/membersPage";

describe('Create post and create member', () => {
   
    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost')

        cy.login(Cypress.env('username'), Cypress.env('password'));
    })

    it('Create a new post', () => {
        const adminPage = new AdminPage();
        const publishedPostsPage = new PublishedPostsPage();
        const memberPage = new MemberPage();


        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.createPost('My first post', 'This is my first post');

        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)

        publishedPostsPage.getFirstPostTitle().should(($title) => {
            expect($title).to.contain('My first post');
        })

        adminPage.navigateToMembersPage();
        
        
        cy.createMember('John Doe', 'test@test.com', 'This is a test member');
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        cy.reload();

        
        memberPage.getFirstMemberName().should(($name) => {
            expect($name).to.contain('John Doe');
        })
    });
});