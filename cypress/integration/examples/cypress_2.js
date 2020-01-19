describe("Test 2: Handling basic functionalities of Cypress", function(){
    it("Checkbox functionality", function(){
        //Navigating to the practice page
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //Clicking on the checkbox and validating that it is checked and also validating the value option
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.checked', 'option1');

        //Un-checking the box and validating that it is unchecked
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

        //Selecting multiple checkboxes and selecting the ones which are needed out of them
        cy.get('input[type = "checkbox"]').check(['option2', 'option3']);
    })

    it("Dropdown functionality", function () {
        //STATIC DROPDOWN
        //Selecting the dropdown option to be option2 and validating the value to be so
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2');

        //DYNAMIC DROPDOWN
        cy.get('#autocomplete').type("Ind");

        //For each of the suggestion box, we need the required option
        cy.get('.ui-menu-item-wrapper').each(($el, index, $list) => {

            const countryText = $el.text();
            if(countryText.includes('India')){
                $el.click();
            }
        })

        //Validating that we have the required option in the selection with an assertion
        cy.get('#autocomplete').should('have.value', "India");
    })

    it("Handling visible and invisible elements", function(){
        //Handling the 'Element Displayed Example'
        //Checking if the BOX is visible
        cy.get("#displayed-text").should('be.visible');

        //Clicking on the HIDE button
        cy.get('input[value = "Hide"]').click();

        //Checking if the BOX is invisible
        cy.get("#displayed-text").should('not.be.visible');

        //Clicking on the SHOW button
        cy.get('input[value = "Show"]').click();

        //Checking if the BOX is visible
        cy.get("#displayed-text").should('be.visible');
    })

    it("Radio Button Functionality", function () {
        //Selecting the radio buttons section as Whole and then clicking on the second and the first one
        cy.get('input[class = "radioButton"]').check(['radio1', 'radio2']);
    })

})