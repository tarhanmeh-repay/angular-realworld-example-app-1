/// <reference types="cypress" />

describe('Test log out', ()=>{
    beforeEach('login to the app', () => {
        cy.loginToApp()
    })

    it('verify user can log out successfully', () => {
        cy.contains('Settings').click()
        cy.contains('Or click here to logout').click()
        cy.get('.navbar-nav').should('contain', 'Sign up')
    })
})