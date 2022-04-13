const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');

const User = sequelize.define(
    "users",
    {
        name: { 
            type: DataTypes.STRING,
            allowNull: false
         },
        age: { 
            type: DataTypes.NUMBER,
            allowNull: false
         },
        email: { 
            type: DataTypes.STRING,
            allowNull: false
         },
        password: { 
            type: DataTypes.STRING,
            allowNull: false
         },
        role: { 
            type: DataTypes.ENUM(['admin', 'user']),
            defaultValue: 'user',
            allowNull: false
         }
    },
    {
        timestamps: true
    }
);


module.exports = User;