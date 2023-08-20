// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login1', (email,sso,password) => {
    
    cy.visit('/')
    // cy.url().should('include','fssfedpitc.ge.com')
    cy.get('a[href="/login/default"]').click()
     cy.get('#identifierInput').type(sso)
     cy.get('#post-button').click()
     cy.get('#password').type(password,{log: false})
     cy.get('#remember-me-login-button').click()
    //     cy.get('#email').type(email)
    // cy.get('.button').click()
    
})

Cypress.Commands.add('login2', (email,sso,password) => {
    
    cy.visit('/')
    cy.get('a[href="/login/default"]').click()
   cy.get('#email').type(email)
    cy.get('.button').click()
    cy.url().should('include','fssfed.ge.com')
     cy.get('#identifierInput').type(sso)
     cy.get('#post-button').click()
     cy.get('#password').type(password,{log: false})
     cy.get('#remember-me-login-button').click()
})

import '@cypress/xpath'
