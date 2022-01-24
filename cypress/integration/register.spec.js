import signup from '../pages/SignupPage'
import dataFactory from '../factories/dataFactory'
import SignupPage from '../pages/SignupPage'

describe('CADASTRO', () => {

    it('Home page on', function () {
        signup.homePageOn()
    })

    it('Successful registration', function () {
        var deliver = dataFactory.deliver()
        const message = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signup.visitRegistrationPage()
        signup.fillForm(deliver)
        signup.submit()
        signup.validatingRegistration(message)
    })

    it('Incorrect cpf', function () {
        var deliver = dataFactory.deliver()

        deliver.cpf = "0000000000A"
        const message = 'Oops! CPF inválido'

        signup.visitRegistrationPage()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe(message)
    })

    it('Incorrect email', function () {
        var deliver = dataFactory.deliver()

        deliver.email = "error.com.br"
        const message = 'Oops! Email com formato inválido.'

        signup.visitRegistrationPage()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe(message)
    })

    context('Required fields', function () {
        const messages = [
            { field: 'nome', answer: 'É necessário informar o nome' },
            { field: 'cpf', answer: 'É necessário informar o CPF' },
            { field: 'email', answer: 'É necessário informar o email' },
            { field: 'cep', answer: 'É necessário informar o CEP' },
            { field: 'endereço', answer: 'É necessário informar o número do endereço' },
            { field: 'metodoEntrega', answer: 'Selecione o método de entrega' },
            { field: 'cnh', answer: 'Adicione uma foto da sua CNH' }
        ]
        before(function () {
            signup.visitRegistrationPage()
            signup.submit()
        })
        messages.forEach(function (m) {
            it(`${m.field} é obrigatório`, function () {
                SignupPage.alertMessageShouldBe(m.answer)
            })
        })
    })
})


