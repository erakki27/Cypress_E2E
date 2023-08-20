///<reference types="cypress" />

//import ScriptHelper from "../support/helpers/scriptHelper.js"
import CreateContainerModal from '../../pageObjectStage/createContainerModal.js';
import ContainerHomePage from '../../pageObjectStage/containerHomePage.js';


describe('Create Integrator Automation Suite', () => {


  const createContainerModal = new CreateContainerModal()
  //const scriptHelper = new ScriptHelper()
  const containerHomePage = new ContainerHomePage()


  beforeEach(function () {

    cy.fixture('userData.json').then(function (userData) {
      this.userData = userData
      
    })

    cy.fixture('testData_CreateContainer.json').then(function (testData) {
      this.testData = testData
    })

  })

  beforeEach(function () {
    // cy.clearCookies()
    cy.login1(this.userData.Owner_ID.userEmail, this.userData.Owner_ID.userSSO, Buffer.from(this.userData.Owner_ID.userPasswordBase64).toString('utf8'))
    //cy.get('div[id="scroll-dia log-title"] h2 svg').click()
  })

  /*it("TC001_15331 : Verify the landing screen of Create container modal window", function () {
    containerHomePage.clickCreateContainerButton()
    createContainerModal.verifyModalLoad()
    createContainerModal.verifyContainerNameField()
    createContainerModal.verifyContainerDescriptionField()
    createContainerModal.verifyContainerTypeField()
    createContainerModal.verifyContainerTypeDropdown(this.testData.testCase1.containerType)
    createContainerModal.verifyContainerTagField()
    createContainerModal.verifyContainerThemeField()
    createContainerModal.disabledbuttonCreateContainer()
    createContainerModal.cancelbutton()
    containerHomePage.clickCreateContainerButton()
    createContainerModal.verifyContainerTheme1(this.testData.testCase1.theme1)
    createContainerModal.crossbutton()
  })

  it("TC002_15332 : Create a Standard container", function () {
    var identifier=Date.now()
    containerHomePage.clickCreateContainerButton()
    createContainerModal.enterContainerName(this.testData.testCase1.containerName + identifier)
    createContainerModal.enterContainerDescription(this.testData.testCase1.containerDescription + identifier)
    createContainerModal.selectContainerType(this.testData.testCase1.containerType)
    //createContainerModal.selectTag(this.testData.testCase1.tags)
    //createContainerModal.selectContainerTheme(this.testData.testCase1.containerTheme)
    createContainerModal.clickCreateContainer()
    cy.get('#create-container-modal').should('contain', 'Container Created : '+ this.testData.testCase1.containerName + identifier)
    createContainerModal.crossbutton()
    cy.get('.ReactTable').should('contain', this.testData.testCase1.containerName + identifier)
  })*/

  it("TC003_15333 : Part 1 - Verify the details displayed on Container experience modal window", function () {
    var identifier=Date.now()
    containerHomePage.clickCreateContainerButton()
    createContainerModal.enterContainerName(this.testData.testCase1.containerName + identifier)
    createContainerModal.enterContainerDescription(this.testData.testCase1.containerDescription + identifier)
    createContainerModal.selectContainerType(this.testData.testCase1.containerType)
    createContainerModal.selectTag(this.testData.testCase1.tags)
    createContainerModal.clickonTagDD()
    createContainerModal.selectContainerTheme(this.testData.testCase1.containerTheme)
    createContainerModal.clickCreateContainer()
    cy.get('#alert-dialog-description').should('contain', 'Excellent! You have successfully created a container.')
    cy.get('#create-container-modal').should('contain', 'Container Created : '+ this.testData.testCase1.containerName + identifier)
    cy.get('[data-test= container-created-create-connection-btn]').should('not.be.disabled')
    cy.get('[data-test= container-created-create-views-btn]').should('not.be.disabled')
    createContainerModal.navigatetoConnetionPage()
    cy.location('pathname').should('contain', '/connections')

  })
  it("TC003_15333 : Part 2 - Verify the details displayed on Container experience modal window", function () {
    var identifier=Date.now()
    containerHomePage.clickCreateContainerButton()
    createContainerModal.enterContainerName(this.testData.testCase1.containerName + identifier)
    createContainerModal.enterContainerDescription(this.testData.testCase1.containerDescription + identifier)
    createContainerModal.selectContainerType(this.testData.testCase1.containerType)
    createContainerModal.selectTag(this.testData.testCase1.tags)
    createContainerModal.clickonTagDD()
    createContainerModal.selectContainerTheme(this.testData.testCase1.containerTheme)
    createContainerModal.clickCreateContainer()
    createContainerModal.navigatetoViewsPage()
    cy.location('pathname').should('contain', '/manage-views')

  })

  /// TC003_15333 : Verify Theme can be selected when creating standard container---need to be verified visually about theme color which is a manual test
})

