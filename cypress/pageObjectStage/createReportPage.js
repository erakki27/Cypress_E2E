/// <reference types="Cypress"/>

class CreateReportPage{

    enterReportName(ReportNameValue){
        cy.get('#report_name').clear()
        cy.get('#report_name').type(ReportNameValue) //Data test tag needed here
    }
 
 
 }
 
 export default CreateReportPage