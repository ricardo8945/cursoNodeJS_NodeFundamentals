const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            desc: 'Es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            demandOption: false,
            desc: 'Muestra la tabla en consola'
        },
        'h':{
            alias: 'hasta',
            type: 'number',
            demandOption: false,
            default: 10,
            desc: 'Define el límite de la tabla de multiplicar'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número'
        }
        return true;
    })
    .argv;

    module.exports = argv;