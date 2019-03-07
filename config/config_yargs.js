const ops = {
    base:{
        demand: true,
        alias: 'b',
        type: 'Number',
        describe: 'operador base de la multiplicacion '
    },
    limite:{
        default: 10,
        alias: 'l',
        type: 'String',
        describe: 'limite para la multiplicacion'
    }
}

const argv = require('yargs')
                .command('create','Crea la tabla de multiplicar y la guarda en un archivo .txt',ops)
                .command('list','Crea una tabla de multiplicar',ops)
                .command('read','Lee un archivo .txt previamente creado',ops)
                .help()
                .argv

module.exports = {
    argv
}