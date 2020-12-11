describe('login', () => {
    it('visits the homepage', () => {
        cy.visit('https://www.xero.com/nz');
    });
    it('clicks the login button', () => {
        cy.contains('Log in').click();
    });
    it('displays the login page', () => {
        cy.get('h2').should('contain', 'Log in to Xero');
    });
    it('displays the username and password fields with placeholder text only', () => {
        cy.get('#xl-form-email').should('exist').and('have.attr','placeholder','Email address');
        cy.get('#xl-form-password').should('exist').and('have.attr','placeholder','Password' )
    });
});
