const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../middlewares/storage');
const { getItems, createItem, getItem, updateItem, deleteItem } = require('../controllers/storage');
const { validatorGetItem } = require('../validators/storage');

router.get('/', getItems);
router.get('/:id', validatorGetItem, getItem);
router.put('/:id', validatorGetItem, updateItem);
router.post('/', uploadMiddleware.single('myfile'), createItem);
router.delete('/:id', validatorGetItem, deleteItem);

module.exports = router;