import fs from 'fs/promises';

const PATH_USERJSON = '../data/inventors.json';

//1.- Leer el archivo

fs.readFile(PATH_USERJSON, 'utf8')
    .then(data => {
        let inventors = JSON.parse(data);
        //2. insertar un nuevo inventro
        inventors.push(
            {
                "-id": 110,
                "first": "Juan",
                "last": "Perez",
                "year": 1879
            });
        //3. Escribir el archivo
        return fs.writeFile(PATH_USERJSON, JSON.stringify(inventors, null, ' '));
    })
    .then(() => {
        console.log('Ya se escribió el archivo');
        return fs.readFile(PATH_USERJSON, 'utf8')
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });