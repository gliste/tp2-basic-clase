//simular la línea de pedidos de startbuck, se realiza en forma asíncrona



function pedidoStarbucks(pedido, callbackCliente) {
    switch (pedido.tipo) {
        case 'Cafe Vainilla':
            setTimeout(() => {
                callbackCliente(pedido.cliente);
            }, 4000);
            break;
        case 'Te helado':
            setTimeout(() => {
                callbackCliente(pedido.cliente);
            }, 2000);

        default:
            break;
    }

}

//linea de pedido 
const pedido1 = { tipo: "Cafe Vainilla", cliente: "Juan" };
const pedido2 = { tipo: "Te helado", cliente: "Maria" };

pedidoStarbucks(pedido1, (cliente) => {
    console.log("Pedido completo llamar a: ", cliente);
});

pedidoStarbucks(pedido2, (cliente) => {
    console.log("Pedido completo llamar a :", cliente);
});

//¿Quién va a recibir primero su pedido Juan o María?
//María, porque tiene un pedido que tarda menos que el de Juan. Indistintamente que Juan halla llegado
//primero.





