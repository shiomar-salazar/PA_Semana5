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

    getPublishPostButtonOld() {
        return cy.get('div.gh-publishmenu-trigger');
    }
    
 
    getContinueButtonModal() {
        return cy.get('button.gh-btn-large');
    }

    getContinueButtonModalOld() {
        return cy.get('button.gh-publishmenu-button');
    }


   

    getConfirmPublishButtonModal() {
        return cy.get('div[class="gh-publish-cta"] > button:first-of-type');
    }


    getConfirmPublishButtonModalOld() {
        return cy.get('div.modal-footer > button:last-of-type');
    }

    

    getUpdatePostButton() {
        return cy.get('button.gh-editor-save-trigger.green');
    }

    getSideMenuButton() {
        return cy.get('button[title="Settings"]');
    }

    getSideMenuDeleteButton() {
        return cy.get('button.settings-menu-delete-button');
    }

}