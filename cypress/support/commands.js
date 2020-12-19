// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('loginWithUI', () => {
    const model = {
        loginPageHeading: 'h2',
        emailField: '#xl-form-email',
        passwordField: '#xl-form-password',
        loginButton: '#xl-form-submit',
        myXeroPageHeading:'h1',
    }

    const username = Cypress.env('username')
    const password = Cypress.env('password')

    cy.visit('https://www.xero.com/nz');
    
    cy.contains('Log in').click();
    cy.get(model.loginPageHeading).should('contain', 'Log in to Xero');
    

    cy.get(model.emailField).should('exist').and('have.attr','placeholder','Email address');
    cy.get(model.emailField).type(username);

    cy.get(model.passwordField).should('exist').and('have.attr','placeholder','Password' )
    cy.get(model.passwordField).type(password); 
    
    cy.get('#xl-form-submit').click();
    cy.url().should('include','Dashboard');
});


// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
