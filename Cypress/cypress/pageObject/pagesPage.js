export class PagesPage {
    getNewPageButton() {
        return cy.get('section[class="view-actions"] > a[href="#/editor/page/"]');
    }

    getAllPagesTitle() {
        return cy.get('ol.pages-list > li');
    }

    getNoPageArea() {
        return cy.get('li.no-posts-box  > div');
    }

    getAllPagesTitleText() {
        return cy.get('ol.pages-list > li > a > h3');
    }

    getPageTitleInput() {
        return cy.get('textarea[placeholder="Page title"]');
    }

    getPageContentInput() {
        return cy.get('div[data-placeholder="Begin writing your page..."]');
    }
 
    getPublishPageButton() {
        return cy.get('button.gh-publish-trigger');
    }

    getSideMenuButton() {
        return cy.get('button[title="Settings"]');
    }

    getSideMenuDeleteButton() {
        return cy.get('button.settings-menu-delete-button');
    }
}