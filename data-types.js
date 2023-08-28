//Tipos de datos en javascript
//Number, String, Boolean, Symbol, Null, Undefined, Object
//Javascript es un lenguaje dinámico (no es TIPADO)

//NUMBER
let var1 = 1;
let var2 = 0;
let var3 = -0;

//console.log("1 / 0 = " + var1 / var2); //error u otra cosa? No da error da un resultado que es: Infinity.
//console.log("0 / 0 = " + var2 / var2); //error u otra cosa? No da error da un resultado que es: NaN (no at number)

console.log("1 / 0 = " + typeof(var1 / var2));
console.log("0 / 0 = " + typeof(var2 / var2));
console.log(Number.MAX_VALUE);
console.log("Raíz cuadrada (-1): " + Math.sqrt(-1));

//STRING
let saludo1 = "Hola mundo";
let saludo2 = 'Hola mundo';
let caracter = 'c'; //es un string 
let nombre = "Pedro";
let saludo3 = `Hola mundo: ${nombre} bienvenido`; //backtick: se utiliza para incorporar dentro de una cadena una variable y evitar las concatenaciones
//entonces permite utilizar el símbolo $ entre {} que indica una "expresión". Incluye un salto de línea
//backtick Alt+96
let pizza; //consultar

//Null: representa la ausencia de algún valor
let nulo = 45;
nulo = null;
console.log(nulo);

//UNDEFINED: propiedad de un objeto que no existe o variable no asignada.
let sinvalor = "Pedro";
console.log(sinvalor.MiPropiedad);
//let sinvalor;

//Parseo de números
let cadenaNumero = "34";
//cadenaNumero = cadenaNumero + 1;
//para que no tome al momento de imprimir "341", se DEBE parsear
cadenaNumero = parseInt(cadenaNumero) + 1;
console.log(cadenaNumero);

//Declaración de Objetos dinámicos
let empleado1 = {Nombre: "Julian", Apellido: "Alvarez", Edad:28};
//console.log(empleado1);
//Primer Acceso a las propiedades del objeto
console.log(`Nombre del empleado: ${empleado.Nombre}`);
//Segundo Acceso a las propiedades del objeto
console.log(`Edad del empleado: ${empleado["Edad"]}`);


