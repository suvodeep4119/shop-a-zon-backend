const Product = require('../models/product');
const { redisClient} = require('../utils/redis')

exports.getProducts = (req, res) => {
    /* Search in DB */
    const searchResult = Product.findById(req.params.productId).then(result => {
        /* Now save this to cache */
        redisClient.set(req.params.productId, JSON.stringify(result))
        return res.status(200).json({ success: true, message: 'Product found', product: result })
    }).catch(e => {
        return res.status(404).json({ success: false, message: 'Product not found' })
    })
}