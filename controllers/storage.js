const fs = require('fs');
const { matchedData } = require('express-validator');
const { storageModel } = require('../models');
const { handleHttpError } = require('../utils/handleHttpError');

const getItems = async (req, res) => {
    try {
        const data = await storageModel.find({})
        res.status(200).send({ data })        
    } catch (error) {
        handleHttpError(res, 'ERROR_GETTING_STORAGES');
    }
}

const getItem = async (req, res) => {
    try {
        const data = await storageModel.findById(matchedData(req).id);
        res.status(200).send({ data });
    } catch (error) {
        handleHttpError(res, 'ERROR_GETTING_STORAGE');
    }
}

const createItem = async (req, res) => {
    try {
        const data = await storageModel.create({
            url: `${process.env.PUBLIC_URL}/${req.file.filename}`,
            filename: req.file.filename,
        });
        res.status(201).send(data);
    } catch (error) {
        res.status(404).send(error);
    }
}

const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        const data = await storageModel.findOneAndUpdate( id, body );
        res.status(200).send(data);
    } catch (error) {
        handleHttpError(res, 'ERROR_UPDATING_STORAGE');
    }
}

const deleteItem = async (req, res) => {
    try {
        const data = await storageModel.findById(matchedData(req).id);
        fs.unlinkSync(`${__dirname}/../storage/${data.filename}`);
        await storageModel.deleteOne({ _id: matchedData(req).id });
        res.status(200).send({ data });
    } catch (error) {
        console.log(error);
        handleHttpError(res, 'ERROR_DELETE_STORAGE');
    }
}


module.exports = { getItems, getItem, createItem, updateItem, deleteItem };