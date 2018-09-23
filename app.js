const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch(comando){

	case 'crear':
		let tarea = porHacer.crear(argv.descripcion);
	break;
	case 'listar':
		porHacer.getListado();
	break;
	case 'actualizar':
		porHacer.actualizar(argv.descripcion,argv.completado);
	break;
	case 'borrar':
		porHacer.borrar(argv.descripcion);
	break;
	default:
		console.log('No existe el comando');


}