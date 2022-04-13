const { check, validationResult } = require('express-validator');

const validatorGetItem = [
    check('id').exists().notEmpty(),
    (req, res, next) => {
        try {
            validationResult(req).throw();
            return next();
        } catch (error) {
            res.status(403).send({ errors: error.array() })
        }
    }
];

module.exports = { validatorGetItem };