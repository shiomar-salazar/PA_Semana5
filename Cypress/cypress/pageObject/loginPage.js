export class LoginPage {
    getEmailInput() {
        // return cy.get('input[name="identification"]');
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

    getErrorLogIn(){
        return cy.get('p.main-error');
    }
    getLogInSuccess(){
        return cy.get('header[class="gh-canvas-header-content"]');
    }
}