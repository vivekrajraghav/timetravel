//Importing Modules for Node and Express
const express = require('express')
const app = express();
const path = require('path')
const fs = require('fs')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/appointment', { useNewUrlParser: true });
const bodyparser = require('body-parser');
app.use(express.urlencoded());
const port = 80;

//Creating Schema for Mongoose
const appointmentschema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    location: String
});

//Creating Model for
const Contact = mongoose.model('appoint', appointmentschema);

//Serving static files
app.use('/static', express.static('static'))

//Set Template engine as Pug
app.set('view engine', 'pug')

//Set Template/View director
app.set('views', path.join(__dirname, 'views'))

//Endpoint for Pug
app.get('/', (req, res) => {
    res.render('home.pug', {
        title: "Time Travelling"
    })
})
app.get('/trip', (req, res) => {
    res.render('trip.pug', {
        title: "Trips"
    })
})
app.get('/services', (req, res) => {
    res.render('services.pug', {
        title: "Services"
    })
})

app.get('/contact', (req, res) => {
    res.render('contact.pug', {
        title: "Contact Us"
    })
})
app.get('/about', (req, res) => {
    res.render('about.pug', {
        title: "About Us"
    })
})
app.post('/contact', (req, res) => {
    var mydata = new Contact(req.body);
    mydata.save().then(() => {
        res.send('Your appointment has been booked')
    })
})

//Listening at port
app.listen(port, () => {
    console.log(`The server started successfully on port ${port}`)
});