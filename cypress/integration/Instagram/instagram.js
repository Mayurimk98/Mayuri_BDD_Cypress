import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";

Given('User navigate to instagram url',()=>{
    cy.visit('https://www.instagram.com/')
})

When('User enter username {string} and password {string}',(username,password)=>{
    cy.get('input[aria-label="Phone number, username, or email"]').type(username)
    cy.get('input[aria-label="Password"]').type(password)
})

And('User tap on "Login" button',()=>{
    cy.contains('Log In').click()
})

Then('User able to see "Instagram" img',()=>{
    cy.get('img[alt="Instagram"]').should('be.visible')
})