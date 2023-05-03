const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscribers')

// GET ALL
// router.get('/', async (req, res) => { // async functions are helpful for Promises in JS.
//     try { // Try to get data from database
//         const subscribers = await Subscriber.find() // await tells the program "don't move on until you finish this code right here. You must aWAIT for this code to finish before moving on, essentially Gandalf to the Balrog"
//         res.json(subscribers) // If request was successful, do this.
//     } catch (err) { // error handling if it errors out
//         res.status(500).json({ message: err.message })
//     }
// })
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


// GET ONE
router.get('/:id', getSubscriber, (req, res) => { // colons indicate parameters. getSubscriber is referrenced, not called because this is our middleware
    res.send(res.subscriber.name) // callback function, can be anything, In this case, we are getting the name of a subscriber instance from the id that is passed through the URL.
})

// CREATE ONE
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message }) // User error
    }
})

// UPDATE ONE
router.patch('/:id', getSubscriber, async (req, res) => {  // PATCH only patches the information passed from user. PUT updates ENTIRE object.
    // Check if user send data for name
    if (req.body.name != null) {
        // If so, change the name in the database
        res.subscriber.name = req.body.name
    }
    // Check if user send data for subscribedToChannel
    if (req.body.subscribedToChannel != null) {
        // If so, change the data in the database
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel
    }
    try {
        const updatedSubscriber = await res.subscriber.save() // try to save new data in database
        res.json(updatedSubscriber)
    } catch (err) { // If unsuccessful, send error message to console.
        res.status(400).json({ message: err.message })
    }
})


// DELETE ONE
router.delete('/:id', async (req, res) => { // colons indicate parameters
    try {
        await res.subscriber.remove()
        res.json({ message: 'Deleted Subscriber' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getSubscriber(req, res, next) { // middleware function to find single subscriber
    let subscriber;
    try {
        subscriber = await Subscriber.findById(req.params.id) // tries to find subcriber by the id that is passed through the url.
        if (subscriber == null) {
            return res.status(404).json({ message: "Cannot find subscriber" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.subscriber = subscriber
    next(); // allows callback function to continue
}


module.exports = router // exports routes in this file, similar to "export" in React.