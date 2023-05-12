/* eslint-disable no-undef */
/// <reference path="./index.js" />

Cypress.Commands.add('dataCy', (value) => cy.get(`[data-cy=${value}]`));

Cypress.Commands.add('name', (elemento, value) => cy.get(`${elemento}[name="${value}"]`));

Cypress.Commands.add('class', (value) => cy.get(`[class="${value}"]`));

Cypress.Commands.add('href', (value) => cy.get(`a[href*="${value}"]`));

Cypress.Commands.add('dataCyType', (dataCy, type, value) => cy.dataCy(dataCy).clear().type(type).should('have.value', value !== undefined ? value : type));

Cypress.Commands.add('dataCySelect', (dataCy, select, value) => cy.dataCy(dataCy).select(select).should('have.value', value !== undefined ? value : select));

//***********************LOGIN****************************
Cypress.Commands.add('login', () => {
    Cypress.on('uncaught:exception', (err, runnable) => { return false; });


});










