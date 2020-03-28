describe("XHR Testing", function () {

    it("Mocking a response", function () {
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.server()

        cy.route({
            method: 'PUT',
            url: 'comments/*',
            status: 404,
            response:{
                error: "The comment does not exist"
            },
            delay: 1000
        }).as("UpdateComment")

        cy.get('.network-put').click()

        cy.get('.network-put-comment').should("contain", 'The comment does not exist')

    })

    //The below code snippet is commented as it not working
    //The functioning has been understood however

    // it("Basic API testing", function () {
    //     cy.request('POST', 'https://216.10.245.166/Library/Addbook.php', {
    //         "name": "Learn Appium Automation with Java",
    //         "isbn": "appium_new_book",
    //         "aisle": "34",
    //         "author": "H.G. Miriam"
    //     }).then(function (response) {
    //         expect(response.body).to.have.property("Msg", "successfully added")
    //         expect(response.status).to.eq(200)
    // })
    // })

})