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

import '@percy/cypress'

// A spy gives you the ability to "spy" on a function, by letting you capture and then assert that the function was called.
let spy
Cypress.on('window:before:load', (win) => {
    spy = cy.spy(win.console, 'error') // can be other methods - log, warn, etc
})

// This command is for checking console errors
Cypress.Commands.add('checkConsoleErrors', () => {
    expect(spy).not.to.be.called
})

// This command is for meta title and meta description
Cypress.Commands.add('checkMetaData', () => {
    cy.title()
        .should('exist')
        .get('head meta[name="description"]')
        .should('have.attr', 'content')
        .get('meta[property="og:image"]')
        .should('have.attr', 'content')
})

// This command is for checking anchor links
Cypress.Commands.add('checkAnchors', () => {
    cy.get('a').each((a) => {
        const message = a.text()
        expect(a, message)
            .to.have.attr('href')
            .not.contain('undefined')
            .not.contain('javascript:void(0)')
    })
})
