/* 3rd party packages */
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./swagger.yaml')
const swaggerAutogen = require('swagger-autogen')();

 
/* Own imports */
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorController = require('./controllers/error')

require('dotenv').config()
const app = express()
/* Middlewares */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404)

console.log('Default database', process.env.MONGO_DEFAULT_DATABASE)
mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:27017/${process.env.MONGO_DEFAULT_DATABASE}?authSource=admin`).then(() => {
    console.log('Connected to database');
    app.listen(process.env.PORT || 3000)
}).catch(e => {
    console.log('Connection failed', e)
}) 
