const express = require('express')

const router = express.Router()
/* Own imports */
const adminController = require('../controllers/admin')
const swaggerJSDoc = require('swagger-jsdoc')

// Swagger definition

router.get('/add-product', adminController.getAddProduct)

router.post('/product', adminController.postAddProduct)

module.exports = router