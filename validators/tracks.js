const { check, validationResult } = require('express-validator');

const validatorCreateItem = [
    check('name').exists().notEmpty(),
    check('album').exists().notEmpty(),
    check('cover').exists().notEmpty(),
    check('artist').exists().notEmpty(),
    check('artist.name').exists().notEmpty(),
    check('artist.nickname').exists().notEmpty(),
    check('artist.nationality').exists().notEmpty(),
    check('duration').exists().notEmpty(),
    check('duration.start').exists().notEmpty(),
    check('duration.end').exists().notEmpty(),
    (req, res, next) => {
        try {
            validationResult(req).throw();
            return next();
        } catch (error) {
            res.status(403).send({ errors: error.array() })
        }
    }
];

const validatorGetItem = [
    (req, res, next) => {
        try {
            validationResult(req).throw();
            return next();
        } catch (error) {
            res.status(403).send({ errors: error.array() })
        }
    }
];

module.exports = { validatorCreateItem, validatorGetItem };