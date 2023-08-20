/// <reference types="Cypress"/>

class CreateContainerModal {

    verifyModalLoad(){
        cy.get('[data-test=create-container-modal-modal]').should('contain',"Create New Container")
    }

    verifyDescriptionOnModal(){
        cy.get('#alert-dialog-description').should('contain',"All integrator reports are stored and managed inside of integrations container.")
    }

    verifyContainerNameField(){
        cy.get('[data-test=create-new-container-name-txtbox-lbl]').should('contain',"Container Name")
    }

    verifyContainerDescriptionField(){
        cy.get('[data-test=create-new-container-desc-txtarea-lbl]').should('contain',"Container Description")
    }

    verifyContainerTypeField(){
        cy.get('[data-test=create-new-container-type-ddwn-lbl]').should('contain',"Container Type")
    }

    verifyContainerTypeDropdown(ContainerTypeValue){
        cy.get('[data-test=create-new-container-type-ddwn]').click().find('#container_type').find('.css-kj6f9i-menu.select__menu').find('.css-11unzgr.select__menu-list').find('#react-select-2-option-0').contains(ContainerTypeValue)
    }

    verifyContainerTagField(){
        cy.get('[data-test=create-new-container-tags-ddwn-lbl]').should('contain',"Tags")
    }

    verifyContainerThemeField(){
        cy.get('[data-test=create-new-container-theme-ddwn-lbl]').should('contain',"Container Theme")
    }

    verifyContainerTheme1(theme1){
        cy.get('[data-test=create-new-container-theme-ddwn]').click()
        cy.xpath("(//div[@class='css-kj6f9i-menu select__menu'])[1]").find('.css-11unzgr.select__menu-list').contains(theme1)
        //cy.xpath("(//div[@class='css-kj6f9i-menu select__menu'])[1]").find('.css-11unzgr.select__menu-list').contains(theme2)
    }

    disabledbuttonCreateContainer() {
    cy.get('[data-test=create-new-container-create-btn]').should('be.disabled')
    
    }

    cancelbutton() {
        cy.xpath("(//span[normalize-space()='Cancel'])[1]").click() 
        }

    crossbutton(){
        cy.get("button[aria-label='Close Dialog']").click()
    }

    enterContainerName(ContainerNameValue) {
        cy.get('[data-test=create-new-container-name-txtbox]').clear()
        cy.get('[data-test=create-new-container-name-txtbox]').type(ContainerNameValue)
    }


    enterContainerDescription(ContainerDescriptionValue) {
        cy.get('[data-test=create-new-container-desc-txtarea]').clear()
        cy.get('[data-test=create-new-container-desc-txtarea]').type(ContainerDescriptionValue,{ delay: 0})
    }

    selectContainerType(ContainerTypeValue) {
        cy.get('[data-test=create-new-container-type-ddwn]').click().find('#container_type').find('.css-kj6f9i-menu.select__menu').find('.css-11unzgr.select__menu-list').find('#react-select-2-option-0').contains(ContainerTypeValue).click()
       
    }

    clickonTagDD(){
        cy.get('[data-test=create-new-container-tags-ddwn]').click()

    }
    selectTag(TagsValue) {
        cy.get('[data-test=create-new-container-tags-ddwn]').click()
        cy.xpath("(//div[@class='css-kj6f9i-menu select__menu'])[1]").contains(TagsValue).click()
    }

    selectContainerTheme(ContainerTheme) {
        cy.get('[data-test=create-new-container-theme-ddwn]').click()
        cy.xpath("(//div[@class='css-kj6f9i-menu select__menu'])[1]").find('.css-11unzgr.select__menu-list').contains(ContainerTheme).click()    
    }

    clickCreateContainer() {
        cy.get('[data-test=create-new-container-create-btn]').click()
    }

    navigatetoConnetionPage() {
        cy.get('[data-test= container-created-create-connection-btn]').click()
    }

    navigatetoViewsPage() {
        cy.get('[data-test= container-created-create-views-btn]').click()
    }
    

}

export default CreateContainerModal