const { createFile,list,readFile } = require('./multiplicaciones/multiplicaciones')
const { argv } = require('./config/config_yargs')
const colors = require('colors/safe');



let command = argv._[0];


switch(command){
    case 'create':
        createFile(argv.base,argv.limite)
            .then( resp => console.log(colors.cyan(resp)))
            .catch( err => console.log(colors.red(err)))
    break;
    case 'list':
        list(argv.base,argv.limite)
            .then( resp => console.log(colors.cyan(resp)))
            .catch( err => console.log(colors.red(err)))

    break;
    case 'read':
        readFile(argv.base,argv.limite)
            .then( resp => console.log(colors.cyan(resp)))
            .catch( err => console.log(colors.red(err)))
        
    break;
    default: 
    console.log(`No existe el comando ${command}`.error);
}

