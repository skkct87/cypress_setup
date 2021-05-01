
describe( 'Go to Website & verify', ()=>{
    it ('open url', ()=>{

        cy.visit('https://datagardener.com/')
        cy.contains('Login')
        cy.contains('Login').click()
       // cy.url().should('include', '/login')       
        

    })
})

describe('Login Journy' , ()=>{
    it('Login with user email & Password' , ()=>{
        cy.url().should('eq', 'https://app.datagardener.com/login')
        cy.get('input[name=email]').type('sunil.kumawat@tecdune.com')
        cy.get('input[name=password]').type('Welcome#123')
        cy.contains('Log In').click()
        cy.screenshot()
        
    })
})

describe('Verify Title', ()=>{
    it('Title should matched' , ()=>{
        cy.title().should('eq' , 'DataGardener- Get Free company information from Companies House')
        cy.contains('All Rights Reserved')
        cy.end()
    })
})