const express = require('express');
const router = express.Router();
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks.js');
const customHeader = require('../middlewares/header.js');
const checkRole = require('../middlewares/role.js');
const authMiddleware = require('../middlewares/session.js');
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');

router.get('/', authMiddleware, getItems);
router.get('/:id', authMiddleware, validatorGetItem, getItem);
router.post('/', authMiddleware, checkRole(['admin']), validatorCreateItem, customHeader, createItem);
router.put('/:id', authMiddleware, validatorGetItem, validatorCreateItem, updateItem);
router.delete('/:id', authMiddleware, validatorGetItem, deleteItem);

module.exports = router;