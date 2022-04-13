const bcryptjs = require('bcryptjs');

const encrypt = async passwordPlain => hash = await bcryptjs.hash(passwordPlain, 10);

const compare = async (passwordPlain, hashPassword) => await bcryptjs.compare(passwordPlain, hashPassword);

module.exports = { encrypt, compare }