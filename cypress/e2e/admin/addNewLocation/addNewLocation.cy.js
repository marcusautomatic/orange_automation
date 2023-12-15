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

      // This test case verifies the system's behavior when attempting to 
      // add a location with invalid or incomplete data.
      it.only('Adding a Location with Invalid Data', () => {
        
        // When the HR administrator selects the option Admin Module
        cy['viewSystemUsersPage.selectOptionAdminModule']()

        // Then the HR administrator selects the option Organization
        cy['viewSystemUsersPage.selectOptionOrganization']()

        // Then the HR administrator selects the option Location
        cy['viewLocationsPage.selectOptionLocation']()

        // And I select the option to "Add New Location"
        cy['viewLocationsPage.selectOptionAddNewLocation']()

        // Then I confirm that the system displays appropriate error messages 
        // indicating invalid data or missing required fields
        cy['view_locations_page.mandatory_fields_error_message']()

        // And I click on the 'Add' button to save the location with the invalid data
        cy['view_locations_page.click_add_button']()


      
      })


  
    })
  })