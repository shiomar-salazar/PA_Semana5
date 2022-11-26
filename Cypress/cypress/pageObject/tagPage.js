export class TagPage {
    
    getNewTagButton() {
        return cy.get('section[class="view-actions"] > a[href="#/tags/new/"]');
    }

    getTagNameInput(){
        return cy.get('input#tag-name');
    }

    getTagSlugInput(){
        return cy.get('input#tag-slug');
    }

    getTagDscriptonInput(){
        return cy.get('textarea#tag-description');
    }

    getTagSaveButton(){
        return cy.get('section[class="view-actions"] > button');
    }

    getAllTagsTitle() {
        return cy.get('ol.tags-list  > li');
    }

    getNoTagsArea() {
        return cy.get('li.no-posts-box  > div');
    }

    getAllTagsTitleText() {
        return cy.get('ol.tags-list > li > a > h3');
    }

    getDeleteTagButton(){
        return cy.get('button[class="gh-btn gh-btn-red gh-btn-icon"]');
    }

    getModalDeleteTag(){
        return cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    }

}