export class LoginPage {
    getEmailInput() {
        return cy.get('input[name="identification"]');
    }

    getPasswordInput() {
        return cy.get('input[name="password"]');
    }

    getLoginButton() {
        return cy.get('button.login');
    }    

    getMembersButton() {
        return cy.get('a[href="#/members/"]:first-of-type');
    }
}