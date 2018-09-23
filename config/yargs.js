const descripcion = {
				demand: true, //obligatoriedad
				alias: 'd',
				desc: 'Descripcion de la tarea que se desea hacer'
			};

const completado = {
				default: true,
				alias: 'c',
				desc: 'Indica si la tarea esta completada [true] o no [false]'
			};


const argv = require('yargs')
	.command('crear',
		'Permite crear una nueva tarea',
		{
			descripcion
		}
	)
	.command('actualizar',
		'Permite actualizar el estado de una nueva tarea existente',
		{
			descripcion,
			completado,
		}
	)
	.command('borrar',
		'Permite borrar una nueva tarea',
		{
			descripcion
		}
	)
	.help()
	.argv;


module.exports = {
	argv
}