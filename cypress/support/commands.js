
//Here we are creating a Cypress customized command which helps us in selecting the name of a mobilephone
//and then click on the 'Add To Cart' button, thereby adding the item to Checkout

//The name of the command is 'selectProduct' and the parameter name is 'productName'
Cypress.Commands.add("selectProduct", (productName) => {
    cy.get('h4.card-title').each(($el, index, $list) => {
        if($el.text().includes(productName)){
            cy.get('button.btn.btn-info').eq(index).click();
        }
    })
})