const {ApolloServer, gql} = require('apollo-server');

const {importSchema} = require('graphql-import')

const perfis = [
    {id: 1, nome: 'Comum'},
    {id: 2, nome: 'Administrador'}
];
const usuarios = [
    {
        id: 1,
        nome: 'João',
        email: 'jao@gmail.com',
        perfil_id: 2
    },
    {
        id: 2,
        nome: 'Maria',
        email: 'maria@gmail.com',
        perfil_id: 1
    }
]

const resolvers = {

        Usuario: {
            salario(usuario) {
                return usuario.salario_real
            },
            
            perfil(usuario) {
                const perfisList = perfis
                    .filter(p => p.id === usuario.perfil_id)
                return perfisList ? perfisList[0] :  null
            }
        }, 

        Produto: {
            precoComDesconto(produto) {
                if(produto.desconto) {
                    return produto.preco * (1 - produto.desconto)
                } else {
                    return produto.preco
                }
            }
        },

        Query: {
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
            usuario(_, {id}) {
                const selecionados = usuarios.filter(u => u.id == id)
                return selecionados ? selecionados[0] :  null
            },

            perfis() {
                return perfis;
            },

            perfil(_, {id}) {
                const perfisList = perfis.filter(p => p.id == id)
                return perfisList ? perfisList[0] :  null
            }

        }

}

const server = new ApolloServer({
    typeDefs: importSchema('./schema/index.graphql'),
    resolvers
});

server.listen().then(({url}) => {
    console.log(`Executando em: ${url}`);
});
