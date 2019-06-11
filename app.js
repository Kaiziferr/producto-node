const argv = require('./config/yargs').argv;


const { crearArchivo, listar } = require("./Tablas-multiplicacion/Producto");

let comando = argv._[0];
console.log(comando);


switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
            // .then(res => console.log(res)).catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(resp => {
            console.log(resp);
        }).catch(errr => {
            console.log(errr);
        });
        break;

    default:
        console.log('Comando no reconocido');
}