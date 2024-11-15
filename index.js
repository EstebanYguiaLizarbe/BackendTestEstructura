require('dotenv').config();
const express = require('express');
const { conexionDb } = require('./database/db');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(4000, () => {
    console.log("server en el puerto 4000");
})

// conexionDb();

app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));

// app.get('/', (req, res) => {
//     res.json({message: "prueba rutas backend"});
// })