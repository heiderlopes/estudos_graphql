const { perfis } = require('../data/db');

module.exports = {
    salario(usuario) {
        return usuario.salario_real
    },
    
    perfil(usuario) {
        const perfisList = perfis
            .filter(p => p.id === usuario.perfil_id)
        return perfisList ? perfisList[0] :  null
    }
}