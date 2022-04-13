const { matchedData } = require('express-validator');
const { tracksModel } = require('../models');
const { handleHttpError } = require('../utils/handleHttpError');

//Obtener todos los items
const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({});
        const user = req.user;
        res.status(200).send({ data, user });
    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERROR_GET_TRACKS');
    }
}

//Obtener sólo 1 item
const getItem = async (req, res) => {
    try {
        const data = await tracksModel.findById(matchedData(req).id);
        res.status(200).send({ data });
    } catch (error) {
        handleHttpError(res, 'ERROR_GET_TRACK');
    }
}

//Crear Item
const createItem = async (req, res) => {
    try {
        const data = await tracksModel.create(matchedData(req));
        res.status(200).send(data);
    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERROR_CREATING_TRACKS');
    }
}

//Actualizar item
const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        const data = await tracksModel.findOneAndUpdate( id, body );
        res.status(200).send(data);
    } catch (error) {
        handleHttpError(res, 'ERROR_UPDATING_TRACK');
    }
}

//Eliminar item
const deleteItem = async (req, res) => {
    try {
        const data = await tracksModel.delete({ _id: matchedData(req).id });
        res.status(200).send({ data });
    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERROR_DELETE_TRACK');
    }
}


module.exports = { getItems, getItem, createItem, updateItem, deleteItem };