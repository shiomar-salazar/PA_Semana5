export class MemberDetailPage {
    getMemberNameInput() {
        return cy.get('input[name="name"]');
    }

    getMemberEmailInput() {
        return cy.get('input[name="email"]');
    }

    getNoteInput() {
        return cy.get('textarea[name="note"]');
    }

    getSaveButton() {
        return cy.get('section[class="view-actions"] > button');
    }

    getDropdownButton() {
        return cy.get('section.view-actions > span.dropdown > button');
    }

    getDeleteButton() {
        return cy.get('section[class="view-actions"] > span.dropdown > ul > li:last-of-type > button');
    }
}