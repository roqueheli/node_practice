const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${__dirname}/../storage`);
    },
    filename: (req, file, cb) => {
        cb(null, `file-${Date.now()}.${file.originalname.split('.').pop()}`);
    }
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;