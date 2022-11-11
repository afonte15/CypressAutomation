/// <reference types ="Cypress" />

describe("UI Elements", function () 
{
    it('Verify Inputbox & Radio buttons', function ()
    {
        cy.visit("http://newtours.demoaut.com/")   // Visit URL 
        cy.url().should('include', 'newtours') //Verify url

        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("mercury")
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("mercury")

        cy.get('input[name=login]').should('be.visible').click() // Sign-in button

        //Title verification
        cy.title().should('eq', 'Find a Flight: Mercury Tours') //Title Verification

        //Radio Buttons
        cy.get('input[value=roundtrip]').should('be.visible').should('be.checked')  //Verifying visibility and radio button check status
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click() //Radio button should be visible but not checked

        cy.get('[name=findFlights]').should('be.visible').click() //Click on Continue Button

        //Title verification
        cy.title().should('eq', 'Select a Flight: Mercury Tours') //Title Verification
        


    })
})