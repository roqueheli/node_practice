const { usersModel } = require("../models");
const { handleHttpError } = require("../utils/handleHttpError");
const { verifyToken } = require("../validators/jwt");
const getProperties = require('../utils/handleEngineProperties');

const propertiesKey = getProperties();

const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return handleHttpError(res, 'ERROR_NO_TOKEN', 401);
        }

        const dataToken = await verifyToken(req.headers.authorization.split(' ').pop());

        (!dataToken) ? handleHttpError(res, 'ERROR_PAYLOAD_DATA', 401) : null;

        req.user = await usersModel.findOne({[propertiesKey.id]: dataToken[propertiesKey.id]});

        next();

    } catch (error) {
        handleHttpError(res, 'ERROR_NO_SESSION', 401);
    }
}

module.exports = authMiddleware;