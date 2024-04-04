const express = require('express')
const routes = express.Router()

/* Own imports */
const shopController = require('../controllers/shop')

routes.get('/', shopController.getProducts)
module.exports = routes