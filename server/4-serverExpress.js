import express from 'express'

const inventors = [
    {
        "_id": 1,
        "first": "Albert",
        "last": "Einstein",
        "year": 1879
    },
    {
        "_id": 2,
        "first": "Isaac",
        "last": "Newton",
        "year": 1643
    },
    {
        "_id": 3,
        "first": "Galileo",
        "last": "Galilei",
        "year": 1564
    },
    {
        "_id": 4,
        "first": "Marie",
        "last": "Curie",
        "year": 1867
    },
    {
        "_id": 5,
        "first": "Johannes",
        "last": "Kepler",
        "year": 1571
    },
    {
        "_id": 6,
        "first": "Nicolaus",
        "last": "Copernicus",
        "year": 1473
    },
    {
        "_id": 7,
        "first": "Max",
        "last": "Planck",
        "year": 1858
    },
    {
        "_id": 8,
        "first": "René",
        "last": "Favarolo",
        "year": 1923
    },
    {
        "_id": 9,
        "first": "Ladislao",
        "last": "Biro",
        "year": 1899
    },
    {
        "-id": 110,
        "first": "Juan",
        "last": "Perez",
        "year": 1879
    }
]

//TODO: llevar a variables de entorno

const PORT = 3000;

const app = express();

//Routers o endpoints 

app.get('/', (req, res) => {
    res.send(`
    <html>
        <head></head>
        <body>
            Home de API REST
        </body>
    </html>
    `);
});

app.get('/api/inventors/:id', (req, res) => {
    const paramId = req.params.id;
    res.json(inventors.find(inventor => inventor._id == paramId));
});

app.get('api/inventors', (req, res) => {
    res.json(inventors);
});


app.listen(PORT, () => {
    console.log("Servidor levantado en el puerto: " + PORT);
});
