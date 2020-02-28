const perfis = [
    {id: 1, nome: 'Comum'},
    {id: 2, nome: 'Administrador'}
];
const usuarios = [
    {
        id: 1,
        nome: 'João',
        email: 'jao@gmail.com',
        perfil_id: 2,
        status: 'ATIVO'
    },
    {
        id: 2,
        nome: 'Maria',
        email: 'maria@gmail.com',
        perfil_id: 1,
        status: 'INATIVO'
    }
]

module.exports = {usuarios, perfis}