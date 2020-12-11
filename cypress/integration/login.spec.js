const model = {
    loginPageHeading: 'h2',
    emailField: '#xl-form-email',
    passwordField: '#xl-form-password',
    loginButton: '#xl-form-submit',
    myXeroPageHeading:'h1',
}

describe('login', () => {
    it('visits the homepage', () => {
        cy.visit('https://www.xero.com/nz');
    });

    it('clicks the login button', () => {
        cy.contains('Log in').click();
    });

    it('displays the login page', () => {
        cy.get(model.loginPageHeading).should('contain', 'Log in to Xero');
    });

    it('displays the username and password fields with placeholder text only', () => {
        cy.get(model.emailField).should('exist').and('have.attr','placeholder','Email address');
        cy.get(model.passwordField).should('exist').and('have.attr','placeholder','Password' )
    });

    it('types a valid username', () => {
        cy.get(model.emailField).type('kath.triggs@xero.com')
        // .should('not.have.attr','placeholder','Email address');
    });

    it('types a valid password', () => {
        cy.get(model.passwordField).type('Tomandnick!23');
    });

    it('clicks on the Log in button', () => {
        cy.get(model.loginButton).click();
    })

    // it('displays the My Xero dashboard', () => {
    //     cy.get(model.loginButton).click();
    // })

    //check the users name?

});
