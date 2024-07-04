//Arreglos 
//Colección de info que se encuentra dentro de una misma variable

const array = [1,2,3,4]

//operador spread extrae la info de un [] y sí se le añade otra info se puede añadir al [] inicial

let array2 = [...array, 5];
//map crea un nuevo array con el resultado de la function
//el return siempre debe ir en la función si no sale undefined
let array3 = array2.map(function(numero){
    return numero *2
});

console.log(array);
console.log(array2);
console.log(array3);
