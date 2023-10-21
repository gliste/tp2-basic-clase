import http from 'http'
const PORT = 3000;

http.createServer((req, resp) => {
    //logica de backend
    resp.writeHead(200, { 'Content-Type': 'text/html' });
    resp.write(`<h1> Hola mundo desde un servidor escuchando el puerto ${PORT}</h1>`);
    resp.end();
}).listen(3000, '127.0.0.1', () => {
    console.log(`Servidor en el puerto ${PORT} levantado`);
});