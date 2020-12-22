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
        emailField: '#xl-form-email',
        loginPageHeading: 'h2',
        loginButton: '#xl-form-submit',
        myXeroPageHeading:'h1',
        passwordField: '#xl-form-password',
    }

    cy.visit('https://www.xero.com/nz');
    cy.contains('Log in').click();
    cy.wait(2000);
    cy.get(model.emailField).should('exist').and('have.attr','placeholder','Email address');
    cy.get(model.passwordField).should('exist').and('have.attr','placeholder','Password' )
    cy.get(model.emailField).type(Cypress.env('username'));
    cy.get(model.passwordField).type(Cypress.env('password')); 
    cy.get('#xl-form-submit').click();

});

// Cypress.Commands.add("clickRecaptcha", () => {
//     cy.get('iframe').first().its('0.contentDocument.body').should('not.be.undefined').and('not.be.empty')
//         .then(cy.wrap).find('#recaptcha-anchor').should('be.visible').click();
//   });


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
