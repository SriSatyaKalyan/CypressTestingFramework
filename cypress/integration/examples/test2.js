describe('Checking items out', function () {
    it('My FirstTestCase', function () {
        //Clicking on the bag image box which displays the items which have been selected for checkout
        cy.get('.cart-icon > img').click();

    })

    it('MySecondCase', function(){
        //Clicking on the 'Proceed to Checkout' button
        cy.contains('PROCEED TO CHECKOUT').click();

        //Clicking on the 'Place Order' button
        cy.contains('Place Order').click();
        
    })
})



