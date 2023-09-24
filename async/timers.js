//Esperar o freezar la ejecución por 2 segundos
//Event Loop: las funciones no tienen bloqueo. 
// setTimeout(() => {
//     console.log('Después de 2 segundos');
// }, 2000);

// setInterval(() => {
//     console.log('Hola después de 2 segundos')
// }, 2000);

//Hola mundo cada segundo solo 5 veces
// let i=0;
// const timerId = setInterval(() => {
//     console.log("Hola mundo", i);
//     i++;
//     if(i===5){
//         clearInterval(timerId);
//     }
// })

//para darle una secuencialidad se deben combinar el setTimeout() con el setInterval().
//se anidan los call back
//ejemplo 
setTimeout(() => {
   console.log('Hola Después de 4 segundos');
   setInterval(() => {
    console.log ('Hola cada 2 segundos');
   }, 2000)
   console.log("Que se ejecuta al final de todo..."); 
}, 4000);

//console.log("Cuando se ejecuta esto?");