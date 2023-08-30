//let vs var
// let es la forma mas recomendada de declarar variables desde ES6
// var sigue siendo soportado solo por los legacy=codigo heredado
// el alcance de var es global siempre, mientras let es a nivel bloque

//Ejemplos
//var
var x = 1;
if(x == 1 ){
    var x = 2;
    console.log(x); //muestra 2
}
console.log(x); //muestra 2

//let
let x = 1;
if(x == 1){
    let x = 2;
    console.log(x); //muestra 2
}
console.log(x); //muestra 1

//var permite declarar variables mas de una vez, con el mismo alcance. Mientras que let, no.
//Ejemplos
var x = 9;

//let x = 9;

//CONSTANTES
const a = 10;
//a = 11; Probar luego
//Siempre que se puede, declarar como constante. Mas eficiente

//CONSTANTE CON OBJETOS
//los objetos declarados como constantes no incluyen a las propiedades. Es decir pueden variar.
const persona = {name: "wes", age: 45};
persona.name = "Pablo";

//persona = null;

//Nota: Object.freeze(persona) con esta declaración se hace contantes TODAS las propiedades
//pero no genera ERROR cuando por error se le asigne un valor a la propiedad. 

