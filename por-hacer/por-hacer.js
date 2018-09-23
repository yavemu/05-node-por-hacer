// Librerias o dependencias
const fs = require('fs');
const colors = require('colors');


// Variables globales
let listadoPorHacer = [];


// metodos
const crear = (descripcion) => {

	cargarDB();

	let tarea = {
		descripcion,
		completado: false
	};

	listadoPorHacer.push(tarea);
	guardarDB();

  	console.log('Tarea guardada exitosamente!'.green);

	return tarea;
}

const getListado = () => {

	cargarDB();

	for(let tarea of listadoPorHacer){
		console.log(`================= Tareas por hacer =================`.green);
		console.log(`${tarea.descripcion} [Estado: ${tarea.completado}]`.yellow);
	}
		console.log(`====================================================`.green);

}

const actualizar = (descripcion, completado = true) => {

	cargarDB();

	let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

	if (index >= 0) {
		listadoPorHacer[index].completado = completado;
		guardarDB();
		console.log('Se actualizo la tarea exitosamente.'.green);
	}
	else{
		console.log('No existe la tarea que se desea actualizar.'.red);
	}
}

const borrar = (descripcion) => {

	cargarDB();

	let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

	if (nuevoListado.length === listadoPorHacer.length) {
	 	console.log('No existe la tarea que se desea borrar.'.red);	
	}
	else{
		listadoPorHacer = nuevoListado;
		guardarDB();
		console.log('Se borro la tarea exitosamente.'.green);
	}
}


// funciones generales
const guardarDB = () =>{

	let data = JSON.stringify(listadoPorHacer);

	fs.writeFile('./db/data.json', data, (err) => {
	  
	  if (err) {
	  	throw ('No se pudo guardar la tarea.'.red);
	  }

	});
}

const cargarDB = () =>{

	try {
		listadoPorHacer = require('../db/data.json');
	}
	catch(e){
		listadoPorHacer = [];
	}
}

module.exports = {
	crear,
	getListado,
	actualizar,
	borrar
}