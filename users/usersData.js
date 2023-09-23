//como se va a trabajar con la lectura de archivos es necesario utilizar las librerias de Node 
//para trabajar con el file System. También se puede importar con el Type Module, pero en este cado
//lo definimos con la declarción de la constante fs.
//tambien se necesitará un path

const fs = require('fs');
const PATH_USERJSON = "../data/users.json"; //la sintaxis para llegar a la ubicación. Los puntitos indican
//subir de nivel

//Armado de CRUD
//función que liste todos los usuarios

function getUsers(){
    //const users = fs.readFileSync(PATH_USERJSON, 'utf8');
    //hay que convertirlo a un objeto
    //const users = JSON.parse(fs.readFileSync(PATH_USERJSON, 'utf-8'));
    //voy optimizando
    return  JSON.parse(fs.readFileSync(PATH_USERJSON, 'utf-8'));
    //se puede seguir utilizando arrow function


}

//función que devuelve un usuario

function getUser(id){
    //reutilizo la función anterior getUsers ya que trae TODOS los objetos y luego se filtra
    //con getUser() utilizo el método find() no el findIdex() ya que no se quiere obtener la posicion
    return getUsers().find(user => user._id == id); //tener en cuenta la notación ya que es por convención

}
//agrega un objeto a la estructura y lo graba
function addUser(user){
    //esta línea se agreaga para obtener un id. En el campo laboral se toma de una base de datos.
    //el id se genera de forma automática en la base de datos
    user._id = Date.now().toString(36) + Math.random().toString(36).substring(2);
    //como se deben leer los usuarios entonces los traigo
    const users = getUser();
    users.push(user); 
    //para persistirlo en el archivo utilizo la función writeFileSync(). Que recibe la ubicación
    //PATH_USERJSON y que se va a escribir. Como se recibe un array de objetos json, se debe convertir
    //a una cadena con formato json en este sentido utilizo: stringify()
    //fs.writeFileSync(PATH_USERJSON, JSON.stringify(users)); //incorrecto
    fs.writeFileSync(PATH_USERJSON, JSON.stringify(users, null, " "));
    //se le pide que la función devuelva al usuario que ya se guardó en la estructura
    return getUser(user._id);


}
//actualiza información del objeto
function updateUser(user){
    //como dentro del usuario esta el id, traigo primero a TODOS los usuarios
    const users = getUsers();
    //obtengo el índice del usuario que se desea modificar
    const index = users.findIndex(userVar => user._id == user._id);
    //con el indice ya obtenido lo asigno a posición en el array de objetos 
    users[index] = user;
    //finalmente se escribe en el archivo
    fs.writeFileSync(PATH_USERJSON, JSON.stringify(users, null, " "));


}
//elimina el objeto
function deleteUser(id){
    //Paso 1. traer los usuarios
    const users = getUser
    //Paso 2. encontrar al usuario que hay que eliminar
    //Paso 3. eliminar al usuario del array
    //la función .splice() que recibe el índice permite hacer el paso 2 y el 3
    users.splice(users.findIndex(user => user._id == id), 1);
    //Paso 4. almacenar/escritura al array con el usuario eliminado
    fs.writeFileSync(PATH_USERJSON, JSON.stringify(users, null, " "));


}
//como estas funciones se utilizaran por fuera de este archivo se deben 
//enviar hacia el exterior con la siguiente sintaxis y ponerlas públicas: 
//la extensión "exports" es como el public, permite la visualización desde fuera
module.exports = {getUser, getUsers, addUser, updateUser, deleteUser}
