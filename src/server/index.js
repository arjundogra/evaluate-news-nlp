const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser= require('body-parser');
const cors = require('cors');
var aylien = require("aylien_textapi");

const app = express()

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

app.use(cors());

var textAPI = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8083, function () {
    console.log('Example app listening on port 8083!')
})

app.post('/api',(req, res) => {
    console.log("hello")
    const data = req.body;
    let formInput = req.body.url;
    textAPI.sentiment({
        'text': formInput,
        mode: 'Document'
    }, function(error, response) {
        console.log(response)
        res.send(response)
    });
});



console.log({
application_id: process.env.API_ID,
application_key: process.env.API_KEY
});

