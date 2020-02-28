const {usuarios, perfis} = require('../../data/db');

module.exports = {
    produtoEmDestaque() {
        return {
            nome: 'S10',
            preco: 4000.00,
            desconto: 0.15,
        }
    }
}