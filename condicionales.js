//Operadores de igualdad
//Comparación
//(==) doble igual y (===)
//operador (==)
console.log(1 == 1); //true
console.log("1" == 1); //true porque no considera el tipo de dato, solo el contenido.
console.log(0 == false); //true  es correcto porque  0 es igual a falso.
console.log(1 == true); //true
console.log("1" == true); // true
console.log(0 == undefined); //false
console.log(null == undefined); //false // if(error)
console.log("-------------");
//operador (===)

//se utiliza para comparar "tipo" y "contenido"
console.log(1 === 1); //true
console.log("1" === 1); //false
console.log(0 === false); //false
console.log(1 === true); //false
console.log("1" === true); //false
console.log(0 === undefined); //false
console.log(null === undefined); //false

//Valores falsos
//false, undefined, null, 0, NaN, '' (cadena vacia)

let a; //a es undefined ya que no tiene valor

//el siguiente detalle de código lo que esta dentro del () es falso ya que a no esta definida
//el valor puede ingresar desde una api, por eso es importante su evaluación.
if (a) {
} else {
}
//Otro ejemplo: cuando el error que ingresa toma uno de los valores falsos dará falso,
if (error) {
  //cuando haya algún error
} else {
  //cuando no haya error
}

//Operador ternario de if (?:)

let d = 2;

d % 2 == 0 ? console.log("Es par") : console.log("Es impar");

//los strings se comparan con == y con ===
