
const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
console.clear();


//console.log(argv);

crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.yellow, 'creado'))
    .catch(err => console.log(err));


//console.log(process.argv);
//console.log('base: yargs',argv.base);
// const [,,arg3='base=5']= process.argv
// const [, base] = arg3.split('=');