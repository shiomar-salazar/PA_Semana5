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

    getAllPostsTitleText() {
        return cy.get('ol.posts-list > li > a > h3');
    }

    getPostsLength() {
        return cy.get('ol.posts-list > li').its('length');
    }

    getPostsListSelector() {
        return 'ol.posts-list > li > a';
    }


}