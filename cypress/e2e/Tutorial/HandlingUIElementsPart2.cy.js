/// <reference types ="Cypress" />

describe("Suite Name", function () 
{
    it('Hobbies Checkboxes', function ()
    {
        cy.visit("https://demo.automationtesting.in/Register.html")   // Visit URL 
        
        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies')
        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox1').uncheck().should('not.be.checked')

        //Select multiple checkbox
        cy.get('input[type=checkbox]').check(['Cricket', 'Hockey'])

    })

    it('Skills Drop Down', function()
    {
        cy.get('#skills').select('Andriod').should('have.value', 'Andriod')
    })
    it('Language Multi Select', function()
    {
        cy.get('#msdd'),click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Japanese').click()
        //when item is hidden by another element and you need to force click.... 
        cy.get('.ui-corner-all').contains('English').click({force:true}) //example
    })

})