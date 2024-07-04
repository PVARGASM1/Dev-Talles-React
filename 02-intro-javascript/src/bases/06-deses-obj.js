//Destructuración
//Asignación desestructurante

const persona = {
    nombre: 'Andrea',
    edad: 25, 
    clave: 'Andy'
};
const {nombre, clave, edad } = persona; 

console.log(nombre, edad, clave);


const context = ({nombreClave, age}) => {

    // const {nombre, clave, edad } = usuario; 
    // console.log(edad, clave, nombre, rango);

    return {
        nombreClave: clave, 
        age: edad,
        latlng: {
          lat: 14.235,
          lng: -13.446
        }
    }

};

//se puede realizar desestructuración de obj, desde una const,
// 

const {nombreClave, age, latlng: {lat, lng}} = context( persona)


console.log(nombreClave, age, lat, lng);