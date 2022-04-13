const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysqlapirest', 'root', '', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql',
    define: { timestamps: false },
    logging: false
});


const dbConnectMySql = async () => {
    try {
        await sequelize.authenticate();
        console.log(`Conexión MySql establecida ${process.env.MYSQL_DATABASE}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { sequelize, dbConnectMySql }