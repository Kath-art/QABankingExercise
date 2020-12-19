const model = {
    firstName: ':nth-child(2) > .TextInput__Input-sc-1itrbo4-0',
    lastName: ':nth-child(4) > .TextInput__Input-sc-1itrbo4-0',
    email: ':nth-child(6) > .TextInput__Input-sc-1itrbo4-0',
    phone: ':nth-child(8) > .TextInput__Input-sc-1itrbo4-0',
    locationValue: '.Select__Element-sc-1534xhu-3',
    termsAndConditionsCheckbox:'.Checkbox__StyledCheckbox-jg2bbn-2',
    termsOfUseLink: '.Typography__Element-sbi4m0-0 > [href="/nz/about/legal/terms/"] > .Underlined__Index-yjk85o-0',
    privacyNoticeLink: '.Typography__Element-sbi4m0-0 > [href="/nz/about/privacy/"] > .Underlined__Index-yjk85o-0',
    offerDetailsLink: '[href="/nz/signup/offer-details/"] > .Underlined__Index-yjk85o-0',
    confirmationButton: '.Button__Element-sc-1cctqc6-0',
}

// const RECAPTCHA_SITE_KEY = window.Cypress ? '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI': 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

describe('Create Trial User', () => {
    it ('vists the homepage and clicks on the trial button ', () => {
        cy.visit('https://www.xero.com/nz');
        cy.contains('Try Xero for free').click();
        cy.url().should('include','signup');
    });

    it ('completes the sign up form', () => {
        cy.clearCookies();
        cy.get(model.firstName).type('first');
        cy.get(model.lastName).type('last');
        cy.get(model.email).type('test@test.com');
        cy.get(model.phone).type('11111');
        cy.get(model.locationValue).should('contain', 'New Zealand');
        
        cy.get('iframe').first().its('0.contentDocument.body').should('not.be.undefined').and('not.be.empty').then(cy.wrap).find('#recaptcha-anchor').should('be.visible').wait(5000).click();
        // cy.get(model.confirmationButton).click();
    });

    // it ('displays the successful sign up page ', () => {
    //     cy.visit('https://www.xero.com/nz');
    //     cy.contains('Try Xero for free').click();
    //     cy.url().should('include','signup');
    // });
});