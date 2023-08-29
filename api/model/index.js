const Users = require('./Users')
const Orders = require('./Orders')
const Products = require('./Products')

module.exports = {
    users: new Users(),
    orders: new Orders(),
    products: new Products()
}