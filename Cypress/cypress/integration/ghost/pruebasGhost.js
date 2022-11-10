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

    it('1. Create a new post and create member', () => {
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

    it('2. delete member and edit post', () => {
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

    it('3. add member, edit post and delete post', () => {
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


    it('4. delete member, create post and edit post', () => {
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

    it('5. create post, delete post, create post and edit post', () => {
        adminPage.navigateToMainPage();
        cy.wait(1000)
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

    it('6. create post, create post, delete post and edit post', () => {
        adminPage.navigateToMainPage();
        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.createPost('My fifth post', 'This is my fifth post');

        adminPage.navigateToMainPage();
        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.createPost('My sixth post', 'This is my sixth post');

        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)

        cy.deletePost('My sixth post');
        cy.wait(1000)
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().contains('My sixth post').should('not.exist');
        cy.wait(1000)

        
        cy.editPost('My fifth post', 'My fifth post edited', 'This is my fifth post edited');
        cy.wait(1000)
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().contains('My fifth post edited').should('exist');
    });

    it('7. add member, add member and delete member', () => {
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

    it('8. create post, edit post, create post and delete post', () => {
        adminPage.navigateToMainPage();
        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.createPost('My seventh post', 'This is my seventh post');

        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)

        cy.editPost('My seventh post', 'My seventh post edited', 'This is my seventh post edited');
        cy.wait(500)
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().contains('My seventh post edited').should('exist');

        adminPage.navigateToMainPage();
        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.createPost('My eighth post', 'This is my eighth post');

        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)

        cy.deletePost('My eighth post');
        cy.wait(1000)
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().contains('My eighth post').should('not.exist');
    });

    it('9. create post, add member and delete post', () => {
        adminPage.navigateToMainPage();
        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.createPost('My ninth post', 'This is my ninth post');

        adminPage.navigateToMembersPage();
        cy.wait(1000)
        cy.createMember('test 5', 'test5@test.com', 'This is a test member 5');
        adminPage.navigateToMembersPage();
        cy.wait(1000)

        memberPage.getMembersList().contains('test 5').should('exist');

        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)

        cy.deletePost('My ninth post');
        cy.wait(1000)
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().contains('My ninth post').should('not.exist');
    });

    it('10. add member, create post, edit post and delete member', () => {
        adminPage.navigateToMembersPage();
        cy.wait(1000)
        cy.createMember('test 6', 'test6@test.com', 'This is a test member 6');
        adminPage.navigateToMembersPage();
        cy.wait(1000)

        memberPage.getMembersList().contains('test 6').should('exist');

        adminPage.navigateToMainPage();
        adminPage.getNewPostButton().click();
        cy.wait(1000)
        cy.createPost('My tenth post', 'This is my tenth post');

        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        cy.wait(1000)

        cy.editPost('My tenth post', 'My tenth post edited', 'This is my tenth post edited');
        cy.wait(500)
        adminPage.navigateToPostsPage();
        adminPage.getPublishedPostsButton().click();
        publishedPostsPage.getAllPostTitles().contains('My tenth post edited').should('exist');

        cy.wait(1000)
        adminPage.navigateToMembersPage();
        cy.deleteMember('test 6');
        cy.wait(1000)

        memberPage.getMembersList().contains('test 6').should('not.exist');
    });
});