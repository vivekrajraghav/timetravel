//Importing Modules for Node and Express
const express = require('express')
const app = express();
const path = require('path')
const fs = require('fs')
app.use(express.urlencoded());
const port = 80;

//Serving static files
app.use('/static', express.static('static'))

app.get('/', (req, res) => {
    res.render('index.html', {
        title: "Time Travelling"
    })
})
app.get('/trip', (req, res) => {
    res.render('./views/trip.html', {
        title: "Trips"
    })
})
app.get('/services', (req, res) => {
    res.render('./views/services.html', {
        title: "Services"
    })
})

app.get('/contact', (req, res) => {
    res.render('./views/contact.html', {
        title: "Contact Us"
    })
})
app.get('/about', (req, res) => {
    res.render('./views/about.html', {
        title: "About Us"
    })
})
app.post('./views/contact', (req, res) => {
    res.send('Your appointment has been booked')
})
//Listening at port
app.listen(port, () => {
    console.log(`The server started successfully on port ${port}`)
});