const {usuarios, perfis} = require('../data/db');

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
    ola() {
        return 'Benvindo GraphQL';
    },
    horaCerta() {
        return new Date();
    },
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
    produtoEmDestaque() {
        return {
            nome: 'S10',
            preco: 4000.00,
            desconto: 0.15,
        }
    },
    numerosMegaSena() {
        const crescente = (a, b) => a - b;

        return Array(6).fill(0)
            .map(n => parseInt(Math.random() * 60))
            .sort(crescente);
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
    },

    perfis() {
        return perfis;
    },

    perfil(_, {id}) {
        const perfisList = perfis.filter(p => p.id == id)
        return perfisList ? perfisList[0] :  null
    }
}