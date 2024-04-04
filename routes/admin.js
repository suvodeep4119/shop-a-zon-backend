const express = require('express')

const router = express.Router()
/* Own imports */
const adminController = require('../controllers/admin')

router.get('/add-product', adminController.getAddProduct)

router.post('/product', adminController.postAddProduct)

module.exports = router