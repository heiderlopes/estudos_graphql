const {usuarios, perfis} = require('../../data/db');

module.exports = {
    ola() {
        return 'Benvindo GraphQL';
    },
    horaCerta() {
        return new Date();
    },
    numerosMegaSena() {
        const crescente = (a, b) => a - b;

        return Array(6).fill(0)
            .map(n => parseInt(Math.random() * 60))
            .sort(crescente);
    }
}