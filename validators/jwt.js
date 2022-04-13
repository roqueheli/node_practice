const jwt = require('jsonwebtoken');
const getProperties = require('../utils/handleEngineProperties');

const propertiesKey = getProperties();

const tokenSign = async (user) => sign = jwt.sign({ [propertiesKey.id]: user[propertiesKey.id], role: user.role }, process.env.JWT_SECRET, { expiresIn: "10M" });

//tokenJwt es el token de sesión
const verifyToken = async tokenJwt => {
    try {
        return jwt.verify(tokenJwt, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
}

module.exports = { tokenSign, verifyToken };