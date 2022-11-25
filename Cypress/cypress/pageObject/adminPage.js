export class AdminPage {
    navigateToMainPage() {
        cy.visit('http://localhost:2368/ghost/#/dashboard');
    }

    navigateToMainPageOld() {
        cy.visit('http://localhost:3002/ghost/#/dashboard');
    }

    getNewPostButton() {
        return cy.get('a[href="#/editor/post/"]');
    }

    getMembersButton() {
        return cy.get('a[href="#/members/"]:first-of-type');
    }

    navigateToMembersPage() {
        cy.visit('http://localhost:2368/ghost/#/members');
    }

    navigateToMembersPageOld() {
        cy.visit('http://localhost:3002/ghost/#/members');
    }
    

    navigateToPostsPage() {
        cy.visit('http://localhost:2368/ghost/#/posts');
    }

    navigateToPostsPageOld() {
        cy.visit('http://localhost:3002/ghost/#/posts');
    }

    getPublishedPostsButton() {
        return cy.get('a[title="Published"]');
    }

    getNewPostButtonOld() {
        return cy.get('li > a[href="#/editor/post/"]');
    }

    navigateToPagesPage() {
        cy.visit('http://localhost:2368/ghost/#/pages');
    }
}