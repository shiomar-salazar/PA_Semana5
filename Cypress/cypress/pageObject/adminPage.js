export class AdminPage {
    getNewPostButton() {
        return cy.get('a[href="#/editor/post/"]');
    }

    getMembersButton() {
        return cy.get('a[href="#/members/"]:first-of-type');
    }

    navigateToMembersPage() {
        cy.visit('http://localhost:2368/ghost/#/members');
    }

    navigateToPostsPage() {
        cy.visit('http://localhost:2368/ghost/#/posts');
    }

    getPublishedPostsButton() {
        return cy.get('a[title="Published"]');
    }
}