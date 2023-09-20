//Utilizo la funcionalidades de Node. Dichas funcionalidades
//estan en paquetes; en este caso, se utilizan los que tiene fileSystem. La info detallada de la api
//se encuentra en la Documentación de la página de Node. No es necesario importar ningún paquete
//porque ya se encuentra localmente al momento de instalarla 

//const fs = require('fs'); //TODO: ver la otra forma con imports
//la forma con imports es la siguiente:

import { readFileSync, writeFileSync } from 'fs';


//lectura de archivos síncrona
//Paso 1) ubicación del documento que se desea leer 
//const path = './data/texto.txt';

//lectura de un archivo json
const path = '.data/inventors.json';

//Paso 2) se define una variable donde guardará el texto que se desea leer. En este caso es síncrona.
//el método readFileSync() pedirá el texto que hay que leer y el tipo; en este caso es el utf-8
//let texto = fs.readFileSync(path, 'utf-8');

//se define la variable para guardar lo que devuelve la función de lectura "readFilesSync()", que es
//una cadena de texto
let inventorsStr = readFileSync(path, 'utf-8');

//array de objetos. Convertir de JSON a objeto. Devuelve un objeto js; es decir, un array
let inventors = JSON.parse(inventorsStr);

//Paso 3) lo muestro
//console.log(texto);

//console.log(inventors);
//console.log(inventors.fiter(inventor => inventor.first == 'Albert'));

//TODO: escribir archivos

inventors.push({first: 'Juan', last: 'Perez', year: 1956}); //aquí se declara
//Create
writeFileSync(path, JSON.stringify(inventors, null, " ")); //aquí se persiste

//Ejercicio
//TODO: hacer un CRUD de Inventors (Create, Read, Update, Delete o ABM)







