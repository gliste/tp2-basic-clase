//1. - Leer el archivo inventors.json
//2. - Insertar un nuevo inventor
//3. - Leer nuevamente el archivo
//4. - Eliminar el inventor que se insertó, escribir el archivo
//5.- Leer nuevamente el archivo

import fs from 'fs';
import { constants } from 'fs/promises';

const PATH_INVENTORJSON = '..data/inventors.json';
//1. Lectura del archivo
fs.readFile(PATH_INVENTORJSON, 'utf-8', (error, data) => {
    if (!error) {
        //2. Inserción del nuevo objeto
        let inventors = JSON.parse(data);
        inventors.push(
            {
                "-id": 100,
                "first": "Juan",
                "last": "Perez",
                "year": 1879
            }
        );
        fs.writeFile(PATH_INVENTORJSON, JSON.stringify(inventors, null, ''), (error) => {
            if (!error) {
                //3. Lectura del archivo nuevamente
                fs.readFile(PATH_INVENTORJSON, 'utf8', (error, data) => {
                    if (!error) {
                        //4. Eliminar el objeto que se agregó
                        let inventors = JSON.parse(data);
                        inventors.splice(inventors.findIndex(inventor => inventor._id == 100), 1);
                        fs.writeFile(PATH_INVENTORJSON, JSON.stringify(inventors, null, ''), (error) => {
                            if (!error) {
                                //5.Leer nuevamente el archivo sin el objeto
                                fs.readFile(PATH_INVENTORJSON, 'utf-8', (error, data) => {
                                    console.log(JSON.parse(data));
                                });
                            }
                        });
                    }
                    else {
                        console.log(error);
                    }
                });
                console.log(error);
            }
            else {
                console.log(error);
            }
        });
    }
    else {
        console.log(error);
    }
});