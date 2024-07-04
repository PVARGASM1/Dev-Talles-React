
//FUNCIONES EN JS

// const saludar = (nombre) => {
//     return `holaaa... ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `holaaa... ${nombre}`;
}

const saludar3 = (nombre) => `holaaa... ${nombre}`;

const saludar4 = () => `Hola Andrea Vargas`;

console.log(saludar2('Andre'));
console.log(saludar3('Andre'));
console.log(saludar4());


const getUser = () => 
  ({
    id: "abc123",
    userName: "AngelVargas68"
  });
  
  const user = getUser();
  console.log(user);
  
  //TASK
  //1. transformar a function flecha
  //2. retornar un objeto implicito
  //3. probar

function getUserActivo (nombre) {
  return {
    id: "abc1234",
    userName: nombre,
  }
}

const userActivo = getUserActivo("Andres");
console.log( userActivo);


const getUserActive = (user) => ({
    id: "abc1234",
    userName: user,
  });


const result = getUserActive("Miriam")
console.log(result);