export class PostPage {
    getPostTitleInput() {
        return cy.get('textarea[placeholder="Post title"]');
    }
 
    getPostContentInput() {
        return cy.get('div[data-placeholder="Begin writing your post..."]');
    }
 
    getPublishPostButton() {
        return cy.get('button.gh-publish-trigger');
    }
 
    getContinueButtonModal() {
        return cy.get('button.gh-btn-large');
    }

    getConfirmPublishButtonModal() {
        return cy.get('div[class="gh-publish-cta"] > button:first-of-type');
    }

    getUpdatePostButton() {
        return cy.get('button.gh-editor-save-trigger.green');
    }
}