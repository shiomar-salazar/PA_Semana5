export class PublishedPostsPage {
    getPublishedPosts() {
        return cy.get('ol.posts-list > li');
    }

    getFirstPostTitle() {
        return cy.get('ol.posts-list > li:first-of-type > a');
    }

    getAllPostTitles() {
        return cy.get('ol.posts-list > li > a');
    }
}