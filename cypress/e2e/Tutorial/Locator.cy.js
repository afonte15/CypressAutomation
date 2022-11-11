/// <reference types="cypress"/>

describe('Locating Elements', function () 
{
    it('Verify tyoes of locators', function()
    {
        cy.visit("https://demo.nopcommerce.com/")  //Opens URL

        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch") //type in search box

        cy.get("[type='submit']").click()  //Click on the search button

        cy.get(".button-2.product-box-add-to-cart-button").click()

        cy.get("#product_enteredQuantity_4").clear().type('2') //Quantity

        cy.get("#add-to-cart-button-4").click() //Add to cart button after providing the quantity

        cy.wait(5000)

        cy.get('#topcartlink > a > span.cart-label').click()
        cy.wait(3000)

        cy.get(".product-unit-price").contains('$1,800.00') //validating point
    })
})