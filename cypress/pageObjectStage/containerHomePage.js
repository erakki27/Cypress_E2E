/// <reference types="Cypress"/>

class ContainerHomePage {

    subheader(){
      cy.get('.sb-mainContent').find('.sb-leftContentGroup').should('contain','Integrations')
    }

    homePageTab(){
        cy.get('[data-test=containers-tab]').should('contain','Containers')
        cy.get('[data-test=reports-tab]').should('contain','Reports')
        cy.get('[data-test=executions-tab]').should('contain','Executions')
        cy.get('[data-test=report-queue-tab]').should('contain','Report Queue')
        cy.get('[data-test=manage-ownership-tab]').should('contain','Manage Ownership')
    }

    defaultselect(){
        cy.get('.sc-subnav-button-wrap').find('.active').should('contain','Containers')
        
    }

    clickonContainerstab(){
         cy.get('[data-test=containers-tab]').click()
         cy.get('[data-test=containers-create-container-btn]').should('include.text','Create Container')
    }

    clickonReportTab(){
        cy.get('[data-test=reports-tab]').click()
    }

    clickonExecutionsTab(){
        cy.get('[data-test=executions-tab]').click()
    }
    clickonReportQueueTab(){
        cy.get('[data-test=report-queue-tab]').click()
    }
    clickonManageOwTab(){
        cy.get('[data-test=manage-ownership-tab]').click()
    }

    clickCreateContainerButton() {
        cy.get('[data-test=containers-create-container-btn]').click()
            //.should('contain', 'create container')
    }

    searchbox(){
      cy.get('[data-test=search-by-api-txtbox]').should('not.be.disabled')
    }

    searchBoxText(){
        cy.get("input[placeholder='Search Containers']").should('contain','Search Containers')
    }
    
    searchBoxDescription(){
        cy.get('#search-by-api').should('contain','Click on search icon to search')
    }

    searchBoxIcon(){

        cy.xpath("(//*[name()='svg'][@role='presentation'])[11]").click() // need to discuss
    }

    serachContainerByName(ContainerName){
        cy.get('#search-by-api').type(ContainerName)
    }

    searchResultTable(){
        cy.get('.ReactTable').should('not.contain','Sanity')
    }
    
    searchResultTable1(){
        cy.get('.ReactTable').should('not.contain','Sanity')
    }
    
    containersTable(){
        cy.get('.ReactTable').should('be.visible')
    }

    containerTableAttributes(){
        cy.get('.ReactTable').should('contain','Container ID')
        cy.get('.ReactTable').should('contain','Container Name')
        cy.get('.ReactTable').should('contain','Type')
        cy.get('.ReactTable').should('contain','Container Owner')
        cy.get('.ReactTable').should('contain','Modified by')
        cy.get('.ReactTable').should('contain','Actions')
    }

    tableAttributeClickable(){
        cy.get('.ReactTable')
        cy.xpath("//div[contains(text(),'Container ID')]").should('not.be.disabled').click()
        cy.xpath("//div[contains(text(),'Container Name')]").should('not.be.disabled').click()
    }

    clickOnContainerId(){
        cy.get('[data-test^=container-id-]').eq(0).click({force: true})
    }

    clickOnUserUnderContainerOwner(){
        cy.get('[data-test^=created-by-]').eq(0).invoke('removeAttr', 'target').click({force: true})
    }

    clickOnUserUnderModifiedBy(){
        cy.get('[data-test^=modified-by-]').eq(0).invoke('removeAttr', 'target').click({force: true})
    }

    optionsUnderActions(){
        cy.xpath("(//span[@class='rt-actions actionDiv'])[1]").should('contain','View ContainerAccess Console')

    }

    clickOnViewContainer(){
        cy.get('[data-test^=view-container-]').eq(0).click({force: true})
    }

    clickOnAccessConsole(){
        cy.get('[data-test^=access-console-]').eq(0).click({force: true})
    }
}

export default ContainerHomePage