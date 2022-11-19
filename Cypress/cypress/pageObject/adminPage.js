export class AdminPage {
    navigateToMainPage() {
        cy.visit('http://localhost:2368/ghost/#/dashboard');
        cy.screenshot();
    }

    navigateToMainPageOld() {
        cy.visit('http://localhost:3002/ghost/#/dashboard');
        cy.screenshot();
    }

    getNewPostButton() {
        return cy.get('a[href="#/editor/post/"]');
    }

    getMembersButton() {
        return cy.get('a[href="#/members/"]:first-of-type');
    }

    navigateToMembersPage() {
        cy.visit('http://localhost:2368/ghost/#/members');
        cy.screenshot();
    }

    navigateToMembersPageOld() {
        cy.visit('http://localhost:3002/ghost/#/members');
        cy.screenshot();
    }
    

    navigateToPostsPage() {
        cy.visit('http://localhost:2368/ghost/#/posts');
        cy.screenshot();
    }

    navigateToPostsPageOld() {
        cy.visit('http://localhost:3002/ghost/#/posts');
        cy.screenshot();
    }

    getPublishedPostsButton() {
        return cy.get('a[title="Published"]');
    }

    getNewPostButtonOld() {
        return cy.get('li > a[href="#/editor/post/"]');
    }
}