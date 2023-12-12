Cypress.Commands.add('login', () => {

    // Given I am on the login page of the HR Management System
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // When the HR administrator selects the option to add general information for the company
})

Cypress.Commands.add('viewSystemUsersPage.selectOptionAdminModule', () => {
cy.get(':nth-child(1) > .oxd-main-menu-item').click()
})

Cypress.Commands.add('viewSystemUsersPage.selectOptionLocalization', () => {

// When the HR administrator selects the option Organization
cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
})

Cypress.Commands.add('viewLocationsPage.selectOptionLocation', () => {
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
})

Cypress.Commands.add('viewLocationsPage.selectOptionAddNewLocation', () => {
    cy.get('.orangehrm-header-container > div > .oxd-button').click()
})

Cypress.Commands.add('viewLocationsPage.validDetailsLocationCreationForm', () => {
    // Name
    cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Yoguii BJJ Associationnnnnn').should('be.visible')
    // City
    cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Rio de Janeiro').should('be.visible')
    // Post Code
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('11300').should('be.visible')
    // Phone
    cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('113000000').should('be.visible') 
    // Address
    cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('R. César Múzio - Vicente de Carvalho').should('be.visible')
    // State
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Cadiz').should('be.visible')
    // Country
    cy.get('.oxd-select-text-input').click()
    // Selected Country
    cy.get('div:nth-child(2) > div > div:nth-child(4) > div > div:nth-child(2) > div > div.oxd-select-dropdown.--positon-bottom > div:nth-child(10)').click()
    // Add Button
    cy.get('.oxd-button--secondary').click().should('be.visible')
    // Validation message
    cy.get('.oxd-toast').should('be.visible')
    

})

