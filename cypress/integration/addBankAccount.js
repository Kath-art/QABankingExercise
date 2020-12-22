const model = {
    organisationName: 'a.name',
    accountingMenu: ':nth-child(3) > .xnav-focusable',
    menuItems: '.xnav-verticalmenuitem--body',
    bankAccountsTitle: '#title',
    addBankAccountButton: '.text',
}

describe('Adding a Bank Account', () => {
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('GlobalSession', 'remember_token')
      })
    it('logs in', () => {
        cy.loginWithUI();
        cy.url().should('contain', 'Dashboard');  
    })

    it('opens the organisation', () => {
        cy.wait(2000);
        cy.get(model.organisationName).click();
        cy.url().should('contain', 'go.xero.com');
    });

    it('opens the Accounting menu', () => {
        cy.wait(2000);
        cy.get(model.accountingMenu).click();
    });

    it('opens the bank accounts sub-menu', () => {
        cy.get(model.menuItems).eq(10).click();
        cy.get(model.bankAccountsTitle).should('exist');
    });

    it('opens the Add Bank Accounts page', () => {
        cy.wait(5000);
        cy.get(model.addBankAccountButton).eq(0)
        .click();
    })
});