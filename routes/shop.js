const express = require('express')
const routes = express.Router()
const {cache} = require('../utils/redis')
/* Own imports */
const shopController = require('../controllers/shop')

routes.get('/:productId', cache, shopController.getProducts)
module.exports = routes