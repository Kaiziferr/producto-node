const opst = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 5,
        alias: 'l'
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime', opst)
    .command('crear', 'Genera un archivo con la tabla de multiplicacion', opst)
    .help()
    .argv;

module.exports = {
    argv
}