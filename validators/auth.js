const { check, validationResult } = require('express-validator');

const validatorRegister = [
    check('name').exists().notEmpty().isLength({min: 3, max: 20}),
    check('age').exists().notEmpty().isNumeric(),
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty().isLength({min: 9, max: 20}),
    (req, res, next) => {
        try {
            validationResult(req).throw();
            return next();
        } catch (error) {
            res.status(403).send({ errors: error.array() })
        }
    }
];

const validatorLogin = [
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty().isLength({min: 9, max: 20}),
    (req, res, next) => {
        try {
            validationResult(req).throw();
            return next();
        } catch (error) {
            res.status(403).send({ errors: error.array() })
        }
    }
];

module.exports = { validatorRegister, validatorLogin };