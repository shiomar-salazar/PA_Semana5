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

    it('Create a new post and create member', () => {
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

    it('add member, edit post and delete post', () => {
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        cy.createMember('test 2', 'test2@test.com', 'This is a test member 2');
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        cy.reload();

        memberPage.getFirstMemberName().should(($name) => {
            expect($name).to.contain('test 2');
        });

        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)

        cy.editPost('My first post edited', 'My first post edited 2', 'This is my first post edited 2');
        cy.wait(500)
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().contains('My first post edited 2').should('exist');

        cy.deletePost('My first post edited 2');
        cy.wait(1000)
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().contains('My first post edited 2').should('not.exist');
    });


    it('delete member, create post and edit post', () => {
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        cy.deleteMember('test 2');
        cy.wait(1000)

        memberPage.getMembersList().contains('test 2').should('not.exist');

        adminPage.navigateToMainPage();
        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.createPost('My second post', 'This is my second post');

        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)

        cy.editPost('My second post', 'My second post edited', 'This is my second post edited');
        cy.wait(500)
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().contains('My second post edited').should('exist');
    });

    it('create post, delete post, create post and edit post', () => {
        adminPage.navigateToMainPage();
        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.createPost('My third post', 'This is my third post');

        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)

        cy.deletePost('My third post');
        cy.wait(1000)
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().contains('My third post').should('not.exist');

        adminPage.navigateToMainPage();
        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.createPost('My fourth post', 'This is my fourth post');

        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)

        cy.editPost('My fourth post', 'My fourth post edited', 'This is my fourth post edited');
        cy.wait(500)
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().contains('My fourth post edited').should('exist');
    });
});