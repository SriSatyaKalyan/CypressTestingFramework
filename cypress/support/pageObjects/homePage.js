class homePage{
    //This deals with the objects on the Home Page. Yayy!! POM started.

    getNameBox(){
        return cy.get('input[name = "name"]:nth-child(2)') }

    getTwoWayDataBindingBox(){
        return cy.get(':nth-child(4) > .ng-untouched') }

    getGenderBox(){
        return cy.get('select') }

    getEntrepreneurButton(){
        return cy.get('input[id = "inlineRadio3"]') }

    getShopLink(){
        return cy.get('a[href = "/angularpractice/shop"]') }
}

export default homePage;