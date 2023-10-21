// declaración de arrays
//let nombresVarios = ['Pedro','Juan', 'Maria', s];
let nombres = ['Pedro', 'Juan', 'Maria'];

//iteradores para recorrer la estructura

for (let index = 0; index < nombre.length; index++) {
    const element = nombres[index];
    console.log(element);
}

nombres.forEach((nombre) => {
    console.log(nombre);
});
//forma abreviada del foreach ya que hay UN solo parámetro y UNA sola línea
nombres.forEach(nombre => console.log(nombre));

//la forma larga sería la siguiente; es decir; es lo mismo que la opción abreviada.
const mifuncioncallback = function (nombre) {
    console.log(nombre);
}

nombres.forEach(mifuncioncallback);

//forin
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];

    }
}
//Funciones que modifican al array

//inserción de un elemento en el array
// al final
nombres.push("Anna");

//al principio
nombres.unshift("Pablo");

//quitar un elemento del array
//quitar desde el principio
let primerNombre = nombres.shift();

//quitar desde el final
let finalNombre = nombres.pop();

//Obtención de un índice del array
//ejemplo índice de "Juan"

let index = nombre.indexOf("Juan");

//averigüar que hacen la siguientes funciones: 
//split: genera un array; parte una cadena. Ejemplo

let stringNombres = "Juan, María, Pedro";
let arrayNombre = stringNombres.split(",");
console.table(arrayNombre);

//join, genera una cadena concatenada con un caracter separador
console.log(arrayNombre.join(";"));
