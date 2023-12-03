Cypress.Commands.add('loginPage.fillFormAndSubmit', (
    user = 'Admin',
    password = 'admin123',
    
    ) => {

        // Given I am on the login page of the HR Management System
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // When I enter valid credentials (username and password)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)

        // And I click the login button
        cy.get('.oxd-button').click()

        // Then I should be redirected to the dashboard 
        // And I should see that I am logged in successfully
        cy.get('.oxd-layout-context')
            .should('be.visible')
        
})

