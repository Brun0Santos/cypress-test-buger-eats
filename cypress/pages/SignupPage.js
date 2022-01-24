class SignupPage {

    homePageOn() {
        cy.visit('/')
        cy.get('#page-home h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')

    }

    visitRegistrationPage() {
        cy.visit('/')
        cy.get('#page-home h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        cy.get('a[href="/deliver"]').click()
    }

    fillForm(delivery) {
        cy.get('input[name="fullName"]').type(delivery.nome)
        cy.get('input[name="cpf"]').type(delivery.cpf)
        cy.get('input[name="email"]').type(delivery.email)
        cy.get('input[name="whatsapp"]').type(delivery.whatsapp)

        cy.get('input[name="postalcode"]').type(delivery.endereco.cep)
        cy.get('input[value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(delivery.endereco.numero)
        cy.get('input[name="address-details"]').type(delivery.endereco.complemento)

        cy.contains('.delivery-method li', delivery.metodoEntrega).click()

        cy.get('.dropzone input[type="file"]').attachFile('/images/' + delivery.cnh)
    }

    submit() {
        cy.get('.button-success[type="submit"]').click()
    }

    validatingRegistration(expectedMessage) {
        cy.get('.swal2-container .swal2-html-container')
            .should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage) {
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }
}
export default new SignupPage;

