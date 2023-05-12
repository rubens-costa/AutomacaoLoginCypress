//ações de interação com a página
const el = require('./elements').ELEMENTS
require("cypress-xpath")
class Registrar {


  acessarSite() {

    cy.visit('')
  }


  registrar() {

    cy.get(el.botaoRegistrar).click()
    cy.get(el.campoEmail).type('rubens.pcosta@hotmail.com')
    cy.get(el.campoNome).type('Rubens Costa')
    cy.get(el.campoSenha).type(12345)
    cy.get(el.campoConfirmacaoSenha).type(12345)
    cy.get(el.botaoCadastrar).click()
    cy.get(el.botaoFecharConfirmacao).click()
  }


}

export default new Registrar();
