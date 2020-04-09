const path = require('path');


// NPM Packages

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const aylien = require('aylien_textapi');


// Dotenv Package (to setup environment variables)

const dotenv = require('dotenv');
dotenv.config();


// App instance
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));


// Aylien API
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});


// MockAPI
const mockAPIResponse = require('./mockAPI.js');


// Server Setup and Routes
const port = 8081;

app.listen(port, function () {
    console.log(`Congratulations, your server is running at port ${port}!`);
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// }) // For initial development stage only

app.post('/aylien-api', function(req, res) {

    console.log(`Url input: ${req.body.urlInput}`);
    textapi.sentiment({url: req.body.urlInput},

    (error, response) => {

        if(error === null) {

            // Valid Url Response

            console.log('*** Valid Url ***');
            res.send(response);

        } else {

            // Invalid Url Response

            console.log('*** Invalid Url ***');
            res.status(404).json({validation: 'Invalid url, please re-enter.'});
        }

    })

})