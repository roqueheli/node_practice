const { handleHttpError } = require("../utils/handleHttpError");

const checkRole = (roles) => (req, res, next) => {
    try {
        if (!roles.some((singleRole) => req.user.role.includes(singleRole))) {
            handleHttpError(res, 'USER_DOESNT_PERMISSION', 403);    
        }
        next();
    } catch (error) {
        handleHttpError(res, 'ERROR_PERMISSION', 403);
    }
}

module.exports = checkRole;