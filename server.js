// Similar to React, you must require your libraries and frameworks
// require('dotenv').config() // connects .env file to server.js if using dotenv npm package

require('dotenv').config() // great for development. When put in .gitignore, .env will hide mongo connection strings on repo.
const express = require('express')
const app = express()
const mongoose = require('mongoose')



mongoose.connect(
    process.env.DATABASE_URL, // mongo connection string (from .env), I got this to work through setting up a free database on mongoDB.com. 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

// Server upon initialization
const db = mongoose.connection
db.on('connected', () => console.log('Connected to database')); // Verfies that we are connected to database

app.use(express.json()) // Express parses request to JSON.

const subscribersRouter = require('./routes/subscribers') // our routes
app.use('/subscribers', subscribersRouter) // requires middleware

app.listen(4000, () => console.log("Server Started!"))