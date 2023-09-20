//como se va a trabajar con la lectura de archivos es necesario utilizar las librerias de Node 
//para trabajar con el file System. También se puede importar con el Type Module. 

const fs = require('fs');

//Armado de CRUD
//función que liste todos los usuarios

function getUser(){

}

//función que devuelve un usuario

function getUser(id){

}

function addUser(user){

}

function updateUser(user){

}

function deleteUser(id){

}
//como estas funciones se utilizaran por fuera de este archivo se deben 
//enviar hacia el exterior con la siguiente sintaxis y ponerlas públicas: 
module.exports = {getUser, getUsers, addUser, updateUser, deleteUser}
