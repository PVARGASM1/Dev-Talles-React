
//OBJETOS LITERALES

const persona = {
    nombre: 'Andrea',
    apellido: 'Vargas',
    edad: 20,
    direccion: {
        ciudad: 'Bogota',
        barrio: 'Castilla',
        zip:110303
    }
}

//console.table(persona)
//usar el ... spread operator para clonar objetos con otro nombre de variable

const persona2 = {...persona}
persona2.nombre = 'Paula';

console.log(persona);
console.log(persona2);