const express = require('express');
const router = express.Router();
const fs = require('fs');

fs.readdirSync(__dirname).filter((file) => {
    if (file.split('.').shift() !== 'index') {
        router.use(`/${file.split('.').shift()}`, require(`./${file}`));
    }
});

module.exports = router;