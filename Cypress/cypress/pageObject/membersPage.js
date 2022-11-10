export class MemberPage {
    getNewMemberButton() {
        return cy.get('a[href="#/members/new/"]');
    }

    getFirstMemberName() {
        return cy.get('table[class="gh-list"] > tbody > tr:first-of-type h3.gh-members-list-name');
    }

    getMemberLink(name) {
        return cy.get('table[class="gh-list"] > tbody > tr').contains(name);
    }

    getMembersList() {
        return cy.get('table[class="gh-list"] > tbody > tr');
    }
}