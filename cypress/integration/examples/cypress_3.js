import 'cypress-iframe'

describe("Test 3: Handing advanced functionalities of Cypress", function(){
    it("Handling pop-ups and alerts", function(){
        //Navigating to the practice page
        cy.visit(Cypress.env("automationPractice_url"));

        //Because Cypress handles alerts and pop-ups, we need not click on Yes/No on the alert
        //Click on the Alert button on the webpage
        cy.get('#alertbtn').click();

        //Click on the Confirm button on the webpage
        cy.get('input[value = "Confirm"]').click();
    })

    it("Getting text in the alert boxes", function(){
            //Firing the ALERT through Cypress
            cy.on('window:alert', (alertString) => {
                //This is a Mocha assertion
                expect(alertString).to.equal("Hello , share this practice page and share your knowledge");
            })

            //Firing the CONFIRM event through Cypress
            cy.on('window:confirm', (confirmString) => {
                expect(confirmString).to.equal("Hello , Are you sure you want to confirm?");
    })
    })

    it("Handling Child Tabs functionality", function(){
        //Clicking on a link which redirects the operation to a child page
        //Here we are removing an attribute called target thus making the link open in the same parent window
        cy.get('#opentab').invoke('removeAttr', 'target').click();

        //Validating the URL of the new page to which we travelled to
        cy.url().should('include', "https://www.rahulshettyacademy.com/#/index");
        //Here, the chainer can also be 'contain'.

        //We now need to navigate back to the webpage
        cy.go('back');
    })

    it("Handling web tables", function(){
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

            const text = $el.text()
            if(text.includes("Python")){
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
                    //const priceText = price.text()
                    expect(price.text()).to.equal("25");
                })
            }
        })
    })

    it("Mouse hover functionality", function () {
        //Here we cannot use Cypress commands to invoke mouse hover actions
        cy.get('.mouse-hover-content').invoke('show');    //'button[id="mousehover"]'
        cy.contains("Top").click();

        //Verifying that clicking on the button has taken to the TOP of the page
        cy.url().should('include', 'top');
    })

    it("Opening a Child Tab", function(){
        //here, we are trying to open a tab using 'href' attribute and prop() method
        cy.get('#opentab').then(function(element){
            const urlText = element.prop('href');
            cy.log(urlText);

            //visit() method cannot be used to access browsers from other domains
            cy.visit(urlText);
        })
    })

    it.only("Handling frames", function(){
        cy.log("Handling frames here")

        //Visiting the webpage which has the iframe
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Here we have entered the iframe using the id
        cy.frameLoaded("#courses-iframe")

        //To start working on the iframe, we need to use the 'cy.iframe()' command
        //To click on any command in the iframe, we need to use '.find()' and not '.get()'
        //Here, we clicked on one of the links in the header of the page
        cy.iframe().find("a[href = '#/mentorship']").eq(0).click()

        //We are now verifying if clicking on the link has opened the particular box
        cy.iframe().find(".inner-box").should("contain", "Mentorship")

        //Finding if the number of packages are 2
        cy.iframe().find(".pricing-title").should('have.length', 2)

    })
})
