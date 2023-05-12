//ações de interação com a página
const el = require('./elements').ELEMENTS
class Login {





  acessarSite() {

    cy.visit('')
  }



  preencherLogin() {

    cy.get(el.campoEmail).type('rubens.pcosta@hotmail.com')
    cy.get(el.campoSenha).type(12345)
    cy.get(el.botaoLogin).click()

  }


}

export default new Login();
