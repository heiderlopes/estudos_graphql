const {usuarios, perfis} = require('../../data/db');

module.exports = {
    perfis() {
        return perfis;
    },

    perfil(_, {id}) {
        const perfisList = perfis.filter(p => p.id == id)
        return perfisList ? perfisList[0] :  null
    }
}