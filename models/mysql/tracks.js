const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');

const Tracks = sequelize.define(
    "tracks",
    {
        name: { 
            type: DataTypes.STRING,
            allowNull: false
         },
        album: { 
            type: DataTypes.NUMBER,
            allowNull: false
         },
        cover: { 
            type: DataTypes.STRING,
            allowNull: false
         },
        artist_name: { 
            type: DataTypes.STRING,
            allowNull: false
         },
         artist_nickname: { 
            type: DataTypes.STRING,
            allowNull: false
         },
         artist_nationality: { 
            type: DataTypes.STRING,
            allowNull: false
         },
         duration_start: { 
            type: DataTypes.NUMBER,
            allowNull: false
         },
         duration_end: { 
            type: DataTypes.NUMBER,
            allowNull: false
         },
         mediaId: { 
            type: DataTypes.STRING,
            allowNull: false
         },
         
    },
    {
        timestamps: true
    }
);


module.exports = Tracks;