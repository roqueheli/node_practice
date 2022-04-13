const handleHttpError = (res, message = 'Algo sucedió', code = 403) => {
    return res.status(code).send(message);
}

module.exports = { handleHttpError };