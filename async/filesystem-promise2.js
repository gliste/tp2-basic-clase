import fs from 'fs/promises';
const PATH_USERJSON = '../data/inventors.json';

function getInventors() {
    return fs.readFile(PATH_USERJSON, 'utf8');
}
try {
    let inventors = await getInventors();
    console.log(inventors);
} catch (error) {
    console.log("Error");
}

//TODO hacer un crud de inventors con Promesas
