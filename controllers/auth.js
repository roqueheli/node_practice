const fs = require('fs');
const { matchedData } = require('express-validator');
const { usersModel } = require('../models');
const { handleHttpError } = require('../utils/handleHttpError');
const { encrypt, compare } = require('../validators/password');
const { tokenSign } = require('../validators/jwt');

/**
 * Este controlador es el encargado de registar un usuario
 * @param {*} req 
 * @param {*} res 
 */
const registerCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const password = await encrypt(req.password);
        const body = { ...req, password };
        const data = await usersModel.create(body);
        data.set('password', undefined, { strict: false });
        res.status(201).send({
            token: await tokenSign(data),
            data
        });
    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERROR_REGISTER_USER');
    }
}

/**
 * Este controlador es el encargado de loguear un usuario
 * @param {*} req 
 * @param {*} res 
 */
const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await usersModel.findOne({ email: req.email }).select('password name role email');
        if (!user) {
            return handleHttpError(res, 'USER_DOESNT_EXISTS', 404);    
        }

        const check = await compare(req.password, user.password);
        if(!check) {
            return handleHttpError(res, 'PASSWORD_INVALID', 401);    
        }
        user.set('password', undefined, { strict: false });

        res.status(200).send({ token: await tokenSign(user), user });
    } catch (error) {
        handleHttpError(res, 'ERROR_LOGIN_USER');
    }
}

module.exports = { registerCtrl, loginCtrl };