

const nombre = 'Andrea';
const lastName = 'Vargas';

//const nombreCompleto = nombre + ' ' + lastName;
const nombreCompleto = `${nombre} ${lastName}`

console.log(nombreCompleto);

function getSaludo (nombre) {
    return "Hola" + " "+ nombre
};

console.log(`${getSaludo(nombreCompleto)}`);