export class ModalPage {
    getConfirmDeleteButton() {
        return cy.get('div.modal-footer > button:last-of-type');
    }
}