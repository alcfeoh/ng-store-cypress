describe('License plate store home page', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('displays the right main title', () => {
        cy.contains('Welcome to our store')
            .should('be.visible')
            .should('have.css', 'font-weight', '300')
            .should('have.css', 'font-size', '72px')
            .and('have.css', 'font-family').and('match', /Segoe UI/);
    });

    it('displays 8 license plates', () => {
        cy.get('app-license-plate').should('have.length', 8);
        cy.get('app-license-plate:nth-of-type(1)').contains('2008 Georgia license plate').should('be.visible');
        cy.get('app-license-plate:nth-of-type(1)').contains('$8').should('be.visible');
        cy.get('app-license-plate:nth-of-type(2)').contains('2015 New Jersey license plate').should('be.visible');
        cy.get('app-license-plate:nth-of-type(2)').contains('$11').should('be.visible');
    });
});
