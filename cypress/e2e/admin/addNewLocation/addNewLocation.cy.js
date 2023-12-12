describe('Add Location in HRM System', () => {

    context('verifies the functionality of adding a new location within the HR Management System.', () => {
  
      beforeEach(() => {
        // Given a logged-in HR administrator on the Company Information Management page
        cy['loginPage.fillFormAndSubmit']()
    })
  
      it('Sucessfully Add Location in HRM System', () => {
        
        // When the HR administrator selects the option Admin Module
        cy['viewSystemUsersPage.selectOptionAdminModule']()

        // Then the HR administrator selects the option Organization
        cy['viewSystemUsersPage.selectOptionOrganization']()

        // Then the HR administrator selects the option Location
        cy['viewLocationsPage.selectOptionLocation']()

        // And I select the option to "Add New Location"
        cy['viewLocationsPage.selectOptionAddNewLocation']()

        // And I fill in the required fields with valid location details
        cy['viewLocationsPage.validDetailsLocationCreationForm']()


      })
  
    })
  })