const Product = require('../models/product')

exports.getAddProduct = (req, res) => {
    console.log(req.body)
    const product = {
        title: '4K monitorrr',
        price: 10000,
        description: 'A monitor for coders',
        imageUrl: 'some url'
    }
    const testProduct = new Product(product)
    testProduct.save().then(result => {
        console.log(result)
    })
    res.json({success: 'false', message: 'Added'})
}

exports.postAddProduct = (req, res) => {
    console.log('Adding a product')
    res.status(200).json({success: true, message: 'Product added'})
}