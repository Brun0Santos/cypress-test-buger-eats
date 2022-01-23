import signup from '../pages/SignupPage'
import dataFactory from '../factories/dataFactory'

describe('CADASTRO', () => {
    
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
    
    it('Required fields', function () {

        signup.visitRegistrationPage()
        signup.submit()
        signup.alertMessageShouldBe('É necessário informar o nome')
        signup.alertMessageShouldBe('É necessário informar o CPF')
        signup.alertMessageShouldBe('É necessário informar o email')
        signup.alertMessageShouldBe('É necessário informar o CEP')
        signup.alertMessageShouldBe('É necessário informar o número do endereço')
        signup.alertMessageShouldBe('Selecione o método de entrega')
        signup.alertMessageShouldBe('Adicione uma foto da sua CNH')


    })
})


