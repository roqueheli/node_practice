const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnectNoSql = require('./config/mongodb.js');
const { dbConnectMySql } = require('./config/mysql');
const morganBody = require('morgan-body');
const loggerStream = require('./utils/handleLogger');

console.clear();

//Para obtener las variables de entorno del .env
dotenv.config();

//Express
const app = express();

//Conexión a la db
console.log(process.env.ENGINE_DB);
(process.env.ENGINE_DB === 'nosql') ? dbConnectNoSql() : dbConnectMySql();

//Cors
app.use(cors());
//Json
app.use(express.json());
//Recursos públicos
app.use(express.static('storage'));

//Morgan body
morganBody(app, {
    nocolors: true,
    stream: loggerStream,
    skip: (req, res) => {
        return res.statusCode < 400
    }
});

//Dinamic Routes
app.use('/api', require('./routes'));

app.listen(process.env.PORT, () => console.log(`Servidor levantado en el puerto ${process.env.PORT}`));