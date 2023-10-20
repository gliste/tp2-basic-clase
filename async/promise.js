const miPromesa = new Promise((resolve, reject) => {
    //Simular una tarea asíncrona
    setTimeout(() => {
        const exito = false;
        if (exito) {
            resolve("Exito");
        } else {
            reject("Error");
        }
    }, 2000);
});
//Consumir la promesa
miPromesa.then((resultado) => {
    console.log("Resultado:", resultado); //Resultado
})
    .catch((error) => {
        console.log("Error:", error);
    });
