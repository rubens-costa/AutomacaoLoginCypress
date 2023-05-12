/// <reference types="cypress"/>
/// <reference path="../support/commands.js" />

import Login from '../support/pages/Login';
import Registrar from '../support/pages/Registrar';
var Chance = require("chance");
var chance = new Chance();
describe('GGAS', () => {
  Cypress.on('uncaught:exception', (err, runnable) => { return false; });

  beforeEach(() => {

    Login.acessarSite()
    //
    //Login.preencherLogin()

  })


  it('Realizar Login com sucesso', () => {


  });


  it.only('Registrar', () => {

    Registrar.registrar()
    //excluir
    //editar

  });



});
