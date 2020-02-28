const usuario = require('./usuario')
const perfil = require('./perfil')
const demo = require('./demo')
const produto = require('./produto')

module.exports = {
    ...usuario,
    ...perfil,
    ...demo,
    ...produto
}