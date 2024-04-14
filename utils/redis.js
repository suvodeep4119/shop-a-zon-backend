const Redis = require('ioredis'); 
require('dotenv').config()

/* Next is Redis connection */
const redisClient = new Redis({
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    password:  process.env.REDIS_PASSWORD || ''
  })

/* Cache middleware */
async function cache(req, res, next) {
    const cachedResponse = await redisClient.get(req.params.productId)
    if (cachedResponse) {
        return res.json({ success: true, message: 'Product found', product: JSON.parse(cachedResponse) })
    }
    next()
}

module.exports = { cache, redisClient}
