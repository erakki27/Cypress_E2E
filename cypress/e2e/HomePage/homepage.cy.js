///<reference types="cypress" />

//import ScriptHelper from "../support/helpers/scriptHelper.js"
import CreateContainerModal from '../../pageObjectStage/createContainerModal.js';
import ContainerHomePage from '../../pageObjectStage/containerHomePage.js';
import ReportsPage from '../../pageObjectStage/reportsPage.js'


describe('Integrator Home Page Automation Suite', () => {


  const createContainerModal = new CreateContainerModal()
  //const scriptHelper = new ScriptHelper()
  const containerHomePage = new ContainerHomePage()
  const reportsPage = new ReportsPage()


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

  it("TC001_15293 : Verify the details on Home page", function () {
    containerHomePage.subheader()
    containerHomePage.homePageTab()
    containerHomePage.defaultselect()
    containerHomePage.clickonReportTab()
    cy.location('pathname').should('contain', '/myreports')
    containerHomePage.clickonExecutionsTab()
    cy.location('pathname').should('contain', '/my-execution')
    containerHomePage.clickonReportQueueTab()
    cy.location('pathname').should('contain', '/queue')
    containerHomePage.clickonManageOwTab()
    cy.location('pathname').should('contain', '/container-ownership')
    containerHomePage.searchbox()
    containerHomePage.clickonContainerstab()
    cy.location('pathname').should('contain', '/integrations')
    containerHomePage.containersTable()

  })

  it("TC002_15294 : Verify the details on Home page", function () {
    containerHomePage.containerTableAttributes()
    containerHomePage.tableAttributeClickable()
    containerHomePage.optionsUnderActions()
    containerHomePage.clickOnContainerId()
    cy.location('pathname').should('contain', '/reports')
    reportsPage.backHomeButton()
    containerHomePage.clickOnUserUnderContainerOwner()
    cy.url().should('contain', '/profiles/profile')
    cy.go('back')
    containerHomePage.clickOnUserUnderModifiedBy()
    cy.url().should('contain', '/profiles/profile')
    cy.go('back')
    containerHomePage.clickOnViewContainer()
    cy.location('pathname').should('contain', '/reports')
    containerHomePage.clickOnAccessConsole()
    cy.location('pathname').should('contain', '/access')
    
  })

})