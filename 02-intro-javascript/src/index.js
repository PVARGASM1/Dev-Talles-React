//import {heroes} from './data/heroes'
//import {heroes} from './data/heroes'

import { heroes } from "./data/heroes";


// const getHeroeById = (id) => {
//     return heroes.find((heroe) => heroe.id === id);
// }

//opción 2 de function with find

//METODO FIND

const getHeroeById = (id) => {
    return heroes.find((heroe) => {
        return heroe.id === id
    });
}

console.log(getHeroeById(1))

//METODO FILTER

const getHeoresByOwner = (owner) => { 
    return heroes.filter((home) => home.owner === owner)
} 

console.log(getHeoresByOwner('DC'));