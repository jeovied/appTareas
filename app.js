const moduloTareas = require('./tareas/funcionesDeTareas');
const process = require('process');

const comando = process.argv[2];

switch (comando) {
    case 'agregar':
        let titulo = process.argv[3];
        if (!titulo) {
            console.log('********************');
            console.log('Ey! Falta el titulo.');
            console.log('********************');
            break
        }
        let estado = process.argv[4];
        moduloTareas.agregarTarea(titulo, estado)
        break;
    case 'listar':
        moduloTareas.listarTareas()
        break
    case 'filtrar':
        moduloTareas.filtrarTareas(process.argv[3])
        break
    case 'deshacer':
        moduloTareas.deshacer()
        break
    default:
        if (comando == null || comando !== 'listar') {
            console.log('****************************************************************');
            console.log('Che, tenes que pasar alguna accion valida (por ejemplo: listar).');
            console.log('****************************************************************');
    }
        break;
}