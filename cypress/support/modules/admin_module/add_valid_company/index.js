Cypress.Commands.add('viewSystemUsersPage.addValidCopany', () => {

        // Given I am on the login page of the HR Management System
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // When the HR administrator selects the option to add general information for the company
})

Cypress.Commands.add('viewSystemUsersPage.selectOptionAdminModule', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
})

Cypress.Commands.add('viewSystemUsersPage.selectOptionOrganization', () => {
    
    // When the HR administrator selects the option Organization
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
})

Cypress.Commands.add('viewSystemUsersPage.selectOptionGeneralInformation', () => {
    
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
})

Cypress.Commands.add('viewOrganizationGeneralInformationPage.selectOptionEditInformation', () => {
    
    cy.get('.oxd-switch-input').click()
})

Cypress.Commands.add('viewOrganizationGeneralInformationPage.clean&updateOrganizationName', () => {
    
    cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Yogui BJJ Association').should('be.visible')
    
})

Cypress.Commands.add('viewOrganizationGeneralInformationPage.AssertionNumberOfEmployees', () => {
    
    cy.get('.oxd-input-group > :nth-child(2) > .oxd-text').should('be.visible')
        
})

Cypress.Commands.add('viewOrganizationGeneralInformationPage.savesTheEnteredInformation', () => {
    
    cy.get('.oxd-button').click()
    cy.get('.oxd-toast').should('be.visible')
        
})

Cypress.Commands.add('viewOrganizationGeneralInformationPage.PopupDisplayAfterSuccessfulUpdate', () => {
    
    cy.get('.oxd-toast').should('be.visible')
        
})





