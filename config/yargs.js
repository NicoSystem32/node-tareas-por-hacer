const descripcion = {

    demand: true,
    alias: 'd',
    desc: 'Descripcción de la tarea por hacer'
};

const completado = {

    default: true,
    alias: 'c',
    desc: 'Marca como completado  o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear tareas por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de las tareas', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra la tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}