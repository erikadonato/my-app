const knex = require('knex')
const config = require('../../knexfile')

const database = knex(config.database)

module.exports = database;
