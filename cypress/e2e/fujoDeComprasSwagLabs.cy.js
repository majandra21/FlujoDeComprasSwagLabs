describe("login", function (){
    it("should flujo de compras", function(){
        cy.visit("https://www.saucedemo.com/v1/index.html");
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('#login-button').click();
        cy.contains('Products').should('be.visible');
        cy.get('[class="btn_primary btn_inventory"]').eq(3).click().should('be.visible');
         cy.get('[class="btn_primary btn_inventory"]').eq(4).click().should('be.visible');
        cy.get('[fill="currentColor"]').click();
        cy.get('[class="btn_action checkout_button"]').click();
        cy.get('#first-name').type("juan");
        cy.get('#last-name').type("perez");
        cy.get('#postal-code').type('1234');
        cy.get('[class="btn_primary cart_button"]').click();
        cy.contains('FINISH').scrollIntoView();
        cy.get('[class="btn_action cart_button"]').click();
        cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible');
    

    })
}
    


)