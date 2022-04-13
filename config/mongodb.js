const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err, res) => {
        (!err) ? console.log('Conexión establecida con la db') : console.log('Conexión fallida con la db');
    });
}

module.exports = dbConnect;