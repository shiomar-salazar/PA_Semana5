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
    })

    it('Create a new post and creatre member', () => {
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

    it('delete member and edit post', () => {
        cy.wait(1000)
        adminPage.navigateToMembersPage();

        cy.deleteMember('John Doe');
        cy.wait(1000)

        memberPage.getMembersList().contains('John Doe').should('not.exist');

        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)

        cy.editPost('My first post', 'My first post edited', 'This is my first post edited');
        cy.wait(500)
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().contains('My first post edited').should('exist');
    });
});