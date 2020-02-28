const {usuarios, perfis} = require('../../data/db');

function indiceUsuario (filtro) {
    if(!filtro) return -1;
    const {id, email} = filtro
    if(id) {
        return usuarios.findIndex(u=> u.id === id)
    } else if(email) {
        return usuarios.findIndex(u=> u.email === email)
    } else {
        return -1;
    }
};

module.exports = {
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Heider',
            email: 'heider@gmail.com',
            idade: 32,
            salario_real: 1234.56,
            vip: true
        }
    },

    usuarios() {
        return usuarios;
    },
    //usuario(_, args) {
    /*usuario(_, {id}) {
        const selecionados = usuarios.filter(u => u.id == id)
        return selecionados ? selecionados[0] :  null
    },*/

    usuario(_, {filtro}) {
        const i = indiceUsuario(filtro);
        if(i < 0) return null
        return usuarios[i];
    }
}