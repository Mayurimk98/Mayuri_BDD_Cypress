import {Given,Then} from "cypress-cucumber-preprocessor/steps";


Given('I open Google page web',()=>{
    cy.visit('https://google.com')
})

Then('I see {string} in the title',(title)=>{
    cy.title(title).should('include',title)
})