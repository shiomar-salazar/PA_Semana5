export class NewMemberPage {
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
}