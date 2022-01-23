var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function () {
        var firstName = faker.name.firstName()
        var lastName = faker.name.firstName()

        var data = {
            nome: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '99999999999',
            endereco: {
                cep: '02217050',
                numero: '99',
                complemento: 'Bar do cypress'
            },
            metodoEntrega: 'Moto',
            cnh: 'cnh-digital.jpg'

        }
        return data

    }
}