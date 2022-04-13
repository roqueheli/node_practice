const customHeader = (req, res, next) => {
    try {
        if (req.headers.apikey !== 'api-roque-123') {
            return res.status(404).send({ error: 'API_KEY_NO_ES_CORRECTA' });
        }
        next();
    } catch (error) {
        return res.status(404).send({ error: 'API_KEY_NO_ES_CORRECTA' });
    }
}

module.exports = customHeader;