//Destructuración en arrays

const personajes = ["Goku", "Vegeta", "Pokemon"];

const [ , ,p3 ] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ["ABC", 123];
}

const [letras, num] = retornaArreglo();

console.log(letras, num)

//TASK
//1. Primer valor de [], se llamará nombre
//2. segundo se llamará setNombre
const state = (valor) => {
    return [valor, () => { console.log("hola Andrea")}];
}

const [nombre, setNombre] = state();

console.log(nombre);
setNombre(); // estoy retornando el console.log de la función y la estoy llamando con los ();

