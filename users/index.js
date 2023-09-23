//aquí probamos lo definido en el usersData

const usersData = require("./usersData.js"); //tener en cuenta la sintaxis ya que es necesario definir la extensión js

//console.log(userData.getUser()); No funciona

//console.log(userData.getUser("59b99dd6cfa9a34dcd7885f4"));
//se puede pasar todo el objeto para agregar, eliminando el id
console.log(userData.addUser({
    name: 'Gabriela',
    email: 'gabriela@jmail.com.ar',
    password: '$2b$12$NpElja7NerH/Vz.6pN0vV.7PNo1fOvMgFx0O8VOro6idM4Evn7n4G'
  }));
//luego que agregue el user Gabriela, ejecutar este cambio
// console.log(userData.addUser({
        //falta _id: ''
//     "name": "Gabriela",
//     "email": "gabrielaPepita@kmail.com.ar",
//     "password": "$2b$12$NpElja7NerH/Vz.6pN0vV.7PNo1fOvMgFx0O8VOro6idM4Evn7n4G"
//    }));

console.log(usersData.deleteUser()); //falta pasar el ID

