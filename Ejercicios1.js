//para tipar estructuras de datos, se puede usar typescript
//typescript --> traspila a javascript porque el navegador solo entiende javaScript
//por lo tanto tiene que cambiarse a javaScript. En el momento de empaquetado.

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879 },
  { first: "Isaac", last: "Newton", year: 1643 },
  { first: "Galileo", last: "Galilei", year: 1564 },
  { firts: "Marie", last: "Curie", year: 1867 },
  { firts: "Johannes", last: "Kepler", year: 1571 },
  { firts: "Nicolaus", last: "Copernicus", year: 1473 },
  { firts: "Max", last: "Planck", year: 1858 },
];

//Ejercicios
//1. Imprimir en consola la coleccion de inventores en formato tabular
//2. Filtrar los inventores nacidos antes del 1800. Imprimirlos
//3. Convertir a mayúsculas los apellidos
//4. Buscar el inventor Kepler y retornar el objeto
//5. ¿Alguno de los inventor nació en 1858? <- IsNacidoEn()
//6. ¿Todos los inventores nacieron después de 1500?
//7. Ordenar los inventores por apellido.

//combinar estas funciones, es decir obtener los inventores nacidos antes de 1800 con el apellido en mayúsculas

//Resolución Ejercicios.
//1. Imprimir en consola la coleccion de inventores en formato tabular
//1a) recorrer la estructura
//1b) mostrarlos con el formato pedido

//function print(inventors) {
//  console.log("Nombre     Apellido      Año");
//  console.log("=============================");
//  inventors.forEach((inventor) => {
//    console.log(inventor.first + " " + inventor.last + "  " + inventor.year);
//  });
//}

//1. optimización de código: eliminación de llaves, utilización de backtick
//function print(inventors) {
//  console.log("Nombre      Apellido       Año");
//  console.log("==============================");
//  inventors.forEach((inventor) =>
//    console.log(`${inventor.first}     ${inventor.last}      ${inventor.year}`)
//  );
//}

//1. utilización de métodos para ajustar el texto a un tamaño determinado
function print(inventors) {
  console.log(inventors);
  console.log("Nombre    Apellido       Año");
  console.log("============================");
  inventors.forEach((inventor) => {
    console.log(
      `${inventor.first.padEnd(12, " ")}${inventor.last.padEnd(12, " ")} ${inventor.year}`);
  });
}

//print(inventors);

//2. Filtrar los inventores nacidos antes del 1800. Imprimirlos
//Por lo general se busca no cambiar los datos originales
//2.a) recorrer la estructura inicial
//2.b) crear un nuevo array y agregar aquellos elementos que se desean mostrar
//como todo es una línea que devuelve un array se le pasa por parámetro a la función print()
//print(inventors.filter((inventor) => inventor.year < 1800));

//3. Convertir a mayúsculas los apellidos
//inventors.map(inventor => {
//  return {first: inventor.first, last: inventor.last.toUpperCase(), year: inventor.year};
//})
//print(
//  inventors.map((inventor) => {
//    return {
//      first: inventor.first,
//      last: inventor.last.toUpperCase(),
//      year: inventor.year,
//    };
//  })
//);

//anidación de funciones
//opción: doble filtrado utilizando la función anterior
//inventores nacidos antes de 1800 y apellido en mayúscula
//print(
//  inventors
//    .map((inventor) => {
//      return {
//        first: inventor.first,
//        last: inventor.last.toUpperCase(),
//        year: inventor.year,
//      };
//    })
//    .filter((inventor) => inventor.year < 1800)
//);

//ERROR COMUN del uso de {} para optimizar código
//Paso 1. se tiene la siguiente expresión
//print(inventor.map(inventor => {
//  return {first: inventor.first, last: inventor.last.toUpperCase(), year:inventor.year}
//}))
//Paso 2. se eliminan las llaves
//print(inventor.map(inventor =>
//   {first: inventor.first, last: inventor.last.toUpperCase(), year:inventor.year}))
//Paso 3. para eliminar la ambigüedad que se presenta con la eliminación de las llaves se colocan parentesis
//print(
//  inventors.map((inventor) => ({
//    first: inventor.firt,
//    last: inventor.last.toUpperCase(),
//    year: inventor.year,
//  }))
//);

//4. Buscar el inventor Kepler y retornar el objeto
//se utiliza el método find() que devuelve un objeto
//el método findIndex() devuelve el índice
console.log(inventors.find((inventor) => inventor.last == "Kepler"));

//al igual que con los otros métodos puedo utilizar el print enviándole por parámetro la función
console.log(inventors.find((inventor) => inventor.last == "Kepler"));

//5. ¿Alguno de los inventores nació en 1858? <- IsNacidoEn()
console.log(inventors.some((inventor) => inventor.year === 1858));

//6. ¿Todos los inventores nacieron después de 1500?
console.log(inventors.every((inventor) => inventor.year > 1500));

//7. Ordenar los inventores por apellido.
//Ordenamiento por burbujeo ver apuntes
//se utiliza el método sort() para definir la logica entre objetos
//en este caso ordena ascendentemente
console.log(inventors);
//print(inventors.sort((a, b) => a.year - b.year));

//para ordenar String es de la siguiente manera

//revisar
// print(
//   inventors.sort((a, b) => {
//     if (a.last > b.last) {
//       return -1;
//     } else {
//       return 1;
//     }
//   })
// );
