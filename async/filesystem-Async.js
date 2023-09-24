import { readFile } from "fs";
const PATH_USERJSON = "../data/users.json";

//si se quiere leer los datos de usuario de forma asíncrona

readFile(PATH_USERJSON, 'utf-8', (error, contenido) => {
    if(!error){
        console.log(contenido);
    }else{
        console.log("Error en la lectura");
    }
});

console.log('Termino de leer el archviso???');

//TODO: Utilizando el modelo asyn de lectura de archivos: 
//Leer el json users.json
//Insertar un user
//Actualizar ese user
//Borrar ese user