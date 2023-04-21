require("dotenv").config()
const express = require('express')
const app = express()
const PORT = 3000

const connectDB = require('./db/connect')
const products_routes = require('./routes/products')

app.get('/', (req,res) => {
    res.send('Hello! How are you?')
})

app.use('/api/products',  products_routes)

app.listen(PORT, async () => {
    console.log('Server Connected at http://localhost:' + PORT)
    await connectDB()
})
