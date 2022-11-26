export class MemberPage {
    getNewMemberButton() {
        return cy.get('div[class="view-actions-top-row"] > a[href="#/members/new/"]');
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

    getAllMembersListNames() {
        return cy.get('table[class="gh-list"] > tbody > tr > a > div > div > h3');
    }

    membersListContainer() {
        return cy.get('section.members-list-container-stretch');
    }

    getMembersListSelector() {
        return 'table[class="gh-list"] > tbody > tr';
    }

    getNoMembersArea() {
        return cy.get('div.gh-members-empty');
    }
}