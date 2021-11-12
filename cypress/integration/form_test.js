describe('Quotes App', () => {

    beforeEach (() => {
        cy.visit('http://localhost:3000/');
    })

    const textInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email');
    const passwordInput = () => cy.get('input[name=password]');
    const tosCheckbox = () => cy.get('input[name=tos]')
    const submitInput = () => cy.get('input[value="Create a Friend!"]');

    it('sanity check to make sure test work', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);

    })

    it('the proper elements are showing', () => {
        textInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        tosCheckbox().should('exist');
        submitInput().should('exist');
    })

    describe('Filling out the inputs and cancelling', () => {
        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost');
        })
       
        it('can type in the inputs', () => {
            textInput()
                .should('have.value', '')
                .type('Martinez, Jessy')
                .should('have.value', 'Martinez, Jessy');

            emailInput()
                .should('have.value', '')
                .type('JestiferM01')
                .should('have.value', 'JestiferM01');

            passwordInput()
                .should('have.value', '')
                .type('90024')
                .should('have.value', '90024');
        })
    })
})