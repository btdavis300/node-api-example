// Similar to React, you must require your libraries and frameworks
// require('dotenv').config() // connects .env file to server.js if using dotenv npm package

const express = require('express')
const app = express()
const mongoose = require('mongoose')


var mongoDB = 'mongodb+srv://admin:nvt.buz4TVW9fxu*pfp@nodeapiexample.f9ktcz9.mongodb.net/node-api?retryWrites=true&w=majority' // mongo string connect, I got this to work through setting up a free database on mongoDB.com. port number comes from Mongo
mongoose.connect(
    mongoDB,
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