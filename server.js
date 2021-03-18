const express = require('express')
const connectDB = require('./config/db')
const allowCrossDomain = require('./middleware/cors')
require('dotenv').config()

const app = express()
//connect database
connectDB(process.env.mongoURI)

//init middleware
app.use(express.json({ extended: false }))

app.use(allowCrossDomain())

//define routes

app.use('/api/register', require('./routes/api/register'))
app.use('/api/login', require('./routes/api/login'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server stated on port ${PORT}`))
