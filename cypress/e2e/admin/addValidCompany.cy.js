describe('Add complete and valid company information', () => {

    context('Verify that an HR admin can successfully add complete and valid company information', () => {
  
      beforeEach(() => {
        // Given a logged-in HR administrator on the Company Information Management page
        cy['loginPage.fillFormAndSubmit']()
    })
  
      it('sucessfully adding company information', () => {
        
        // When the HR administrator selects the option Admin Module
        cy['viewSystemUsersPage.selectOptionAdminModule']()

        // Then the HR administrator selects the option Organization
        cy['viewSystemUsersPage.selectOptionOrganization']()

        // Then the HR administrator selects the option General Information
        cy['viewSystemUsersPage.selectOptionGeneralInformation']()

        // Then the HR administrator click the edit button
        cy['viewOrganizationGeneralInformationPage.selectOptionEditInformation']()

        // Then the HR administrator clear and update the name of the Organization
        cy['viewOrganizationGeneralInformationPage.clean&updateOrganizationName']()

        // Then the HR administrator assert that the count obtained from the system UI matches the count obtained from the database.
        cy['viewOrganizationGeneralInformationPage.AssertionNumberOfEmployees']()

        // And saves the entered information
        cy['viewOrganizationGeneralInformationPage.savesTheEnteredInformation']()

        // Then the HR admin verify that a success popup is displayed upon successfully updating information in the system.
        cy['viewOrganizationGeneralInformationPage.PopupDisplayAfterSuccessfulUpdate']()

      })
  
    })
  })