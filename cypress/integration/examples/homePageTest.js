/// <reference types="Cypress" />
describe('Test 1: Selecting items from the website', function(){
    it("Performing grocery shopping", function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

        //Here 'get' can be equated with 'findElement' in Selenium
        cy.get('.search-keyword').type("ca")

        //wait line in Cypress
        cy.wait(2000);

        //A console log
        console.log("Where do I get printed?");

        //should is an assertion in Chai
        cy.get('.product:visible').should('have.length', 4);

        //Aliasing
        cy.get('.products').as('productsAlias');

        //get the child DOM elements in the web-page - Parent child chaining
        cy.get('@productsAlias').find('.product').should('have.length', 4);

        //Click on AddToCart button on the second button. try to have a test case where you are required to get element from the end of the list
        //using eq as the negative index pulls from the end of the list
        cy.get('@productsAlias').find('.product').eq(1).contains("ADD TO CART").click();

        //So, now, instead of relying on the index, we are verifying the name of the Product and then proceed to click on the
        //respective ADD TO CART element. Here, we will click on other product, not the one selected in the above step.
        cy.get('@productsAlias').find('.product').each(($el, index, $list) => {

            const vegetableText = $el.find('h4.product-name').text();
            if(vegetableText.includes('Cashews')){
                $el.find('button').click();
            }
        })

        //Aliasing done here again
        cy.get('p > strong').as('footerText');

        //Printing the name of the logo
        cy.get('@footerText').then(function(logoText){
            cy.log(logoText.text());
        })

        //Assertion from Chai
        cy.get('@footerText').should('have.text', "GreenKart");

    })

    // it('Clicking on the cart item and proceeding to checkout', function () {
    //     //Clicking on the bag image box which displays the items which have been selected for checkout
    //     // cy.get('.cart-icon > img').click();
    //     cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/cart")
    //
    //     //Clicking on the 'Proceed to Checkout' button
    //     // cy.contains('PROCEED TO CHECKOUT').click();
    //
    //     //wait line in Cypress
    //     cy.wait(2000);
    //
    //     //Clicking on the 'Place Order' button
    //     cy.contains('Place Order').click();
    // })
})