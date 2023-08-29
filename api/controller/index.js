const express = require('express')
const bodyParser = require('body-parser')
const {verifyAToken} = require('../middleware/AuthenticateUser')
const routes = express.Router()
const {users, products, orders} = require('../model')

// ==== Users Router ====

// ==== Products Router ====

// ==== Orders Router ====

module.exports = {
    express,
    routes
}