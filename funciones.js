//Tipos de declaración de funciones

//la forma tradicional

function add(a, b){
    return a + b;
}

// valores por defecto en los parámetros
function calcularImpuestos(total, tax = 0.13, tip = 0.15){
    return total + (total * tax) + (total * tip) ;
}
//Ejemplo 1
calcularImpuestos(100) //puedo elegir no pasarle los valores opcionales, entonces toma los definidos
//Ejemplo 2
calcularImpuestos(100, 0.25);
//funciones en variables
const square = function(x){
    return x*x;
}

square(4);

//funciones callback 

function micallback(a){
    return a(4);
}

console.log(micallback(square));

//Arrow function (simplifica código)
//const getSum = function (a,b){
//    return a + b;
//}

//con al Arrow function la función anterior quedaría de la siguiente manera: 
//se elimina la palabra "function" al tener UNA sola línea dentro del cuerpo de la función NO
//se necesitan las llaves {} ni Return
const getSum = (a,b) => a + b;

getSum(3,6);

const square2 = x => x * x;