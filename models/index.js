const models = {
    usersModel: require(`./${process.env.ENGINE_DB}/users`),
    tracksModel: require(`./${process.env.ENGINE_DB}/tracks`),
    storageModel: require(`./${process.env.ENGINE_DB}/storage`)
}

module.exports = models;