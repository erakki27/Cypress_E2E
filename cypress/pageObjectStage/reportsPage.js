/// <reference types="Cypress"/>

class ReportsPage{

   backHomeButton(){
    cy.get('.sc-core-arrow_left.sb-backBtnIcon').click()  //Data test tag needed here
   }
   
   createReportButton(){
    cy.get('.jss6871.jss7007.jss7018.jss7019.jss7021.jss7022').click()  //Data test tag needed here
   }
   
   clickmanageSettingsOptionSideBar(){
    cy.get('[data-test=manage-settings-left-nav]').click()
   }

   clickReportListOptionSideBar(){
    cy.get('[data-test=report-list-left-nav]').click()
   }

   clickInsightsOptionSideBar(){
    cy.get('[data-test=insights-left-nav]').click()
   }

   clickConnectionsOptionSideBar(){
    cy.get('[data-test=connections-left-nav]').click()
   }

   clickManageViewOptionSideBar(){
    cy.get('[data-test=manage-views-left-nav]').click()
   }
   
   clickFileManageOptionSideBar(){
    cy.get('[data-test=file-management-left-nav]').click()
   }

   clickDataExplorerOptionSideBar(){
    cy.get('[data-test=data-explorer-left-nav]').click()
   }

   clickAccessConsoleOptionSideBar(){
    cy.get('[data-test=access-console-left-nav]').click()
   }

}

export default ReportsPage