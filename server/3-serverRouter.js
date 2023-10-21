import http from 'http'

const PORT = 3000;

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
]

http.createServer((req, resp) => {
    //logica de backend
    switch (req.url) {
        case "/":
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write(`
                <html>
                    <head></head>
                    <body>
                        Home de API REST
                    </body>
                </html>
            `)
            break;
        case `/api/inventors`:
            resp.writeHead(200, { 'Context-Type': 'aplication/json' });
            resp.write(JSON.stringify(inventors, null, ' '));
            break;

        default:
            resp.writeHead(404, { 'Content-Type': 'text/html' });
            resp.write("404 - Recurso no encontrado");
            break;
    }

    resp.end();
}).listen(3000, '127.0.0.1', () => {
    console.log(`Servidor en el puerto ${PORT} levantado`);
});