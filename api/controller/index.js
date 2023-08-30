const express = require('express')
const bodyParser = require('body-parser')
const {verifyAToken} = require('../middleware/AuthenticateUser')
const routes = express.Router()
const {users, products, orders} = require('../model')

// ==== Users Router ====

routes.get('/users', (req,res)=>{
    users.fetchUsers(req, res)
})

routes.get('/users/:id', (req, res)=>{
    users.fetchUser(req, res)
})

routes.post('/users', bodyParser.json(),
(req, res)=>{
    users.register(req, res)
})

routes.post('/user', bodyParser.json(),
(req, res)=>{
    users.login(req, res)
})

routes.put('/users/:id', bodyParser.json(),
(req, res)=>{
    users.updateUser(req, res)
})

routes.patch('/users/:id', bodyParser.json(),
(req, res)=>{
    users.updateUser(req, res)
})

routes.delete('/users/:id', (req, res)=>{
    users.deleteUser(req, res)
})

// ==== Products Router ====

routes.get('/products', (req,res)=>{
    products.fetchProducts(req, res)
})

routes.get('/products/:id', (req,res)=>{
    products.fetchProduct(req, res)
})

routes.post('/products', bodyParser.json(),
(req, res)=>{
    products.registerProduct(req, res)
})

routes.put('/products/:id', bodyParser.json(),
(req, res)=>{
    products.updateProduct(req, res)
})

routes.patch('/products/:id', bodyParser.json(),
(req, res)=>{
    products.updateProduct(req, res)
})

routes.delete('/product/:id', (req, res)=>{
    products.deleteProduct(req, res)
})

// ==== Orders Router ====

module.exports = {
    express,
    routes
}