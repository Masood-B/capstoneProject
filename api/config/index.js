require('dotenv').config
const { createpool } = require('mysql')

let connection = createpool({
    host: process.env.dbHost,
    database: process.env.dbName,
    user: process.env.dbUser,
    password: process.env.dbPass,
    multipleStatement: true,
    connectionLimit: 30
});

module.exports = connection