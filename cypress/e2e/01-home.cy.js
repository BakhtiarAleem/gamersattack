describe('Home page', () => {
    it('checks the design of the home page', () => {
        cy.intercept(
            'GET',
            Cypress.env('NEXT_PUBLIC_APP_URL') +
                '/_next/static/development/_devPagesManifest.json'
        )
            .as('home')

            .visit('/')

            .percySnapshot()
    })

    it('checks the console errors of the page', () => {
        cy.checkConsoleErrors()
    })

    it('checks the meta title and meta description of the page', () => {
        cy.checkMetaData()
    })

    it('checks if the page has any broken anchor links', () => {
        cy.checkAnchors()
    })
})
