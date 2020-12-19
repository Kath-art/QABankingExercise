const model = {
    firstName: ':nth-child(2) > .TextInput__Input-sc-1itrbo4-0',
    lastName: ':nth-child(4) > .TextInput__Input-sc-1itrbo4-0',
    email: ':nth-child(6) > .TextInput__Input-sc-1itrbo4-0',
    phone: ':nth-child(8) > .TextInput__Input-sc-1itrbo4-0',
    location: ':nth-child(8) > .TextInput__Input-sc-1itrbo4-0',
    reCaptcha: '[style="width: 304px; height: 78px;"] > div > iframe',
    termsAndConditionsCheckbox:'.Checkbox__Label-jg2bbn-3',
    termsOfUseLink: '.Typography__Element-sbi4m0-0 > [href="/nz/about/legal/terms/"] > .Underlined__Index-yjk85o-0',
    privacyNoticeLink: '.Typography__Element-sbi4m0-0 > [href="/nz/about/privacy/"] > .Underlined__Index-yjk85o-0',
    offerDetailsLink: '[href="/nz/signup/offer-details/"] > .Underlined__Index-yjk85o-0',
    confirmationButton: '.Button__Element-sc-1cctqc6-0',
}

describe('Create Trial User', () => {
    it ('visits the 30 day trial page', () => {
        cy.visit('https://www.xero.com/nz');
        cy.contains('Try Xero for free').click();
        cy.url().should('include','signup');
    })
});