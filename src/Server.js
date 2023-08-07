// Requiring all the necessary packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RosterPi = require('../models/rosterPi');
const bodyParser = require('body-parser');



// Creating an express app
const app = express();


// Cross Origin Resource Sharing is a security feature built into browsers that ensures that web pages from one domain are not able to make requests to another domain unless the second domain explicitly allows it so we're allowing it explicitly here
app.use(cors());

// Seperate middleware used to parse(break down) a JSON payload encoded data which is used by the React to make API requests
app.use(bodyParser.json());



// Defining the required variables for the database
const username = "localhost";
const password = "localhost";
const DBname = "MERN";


// Connecting to our MongoDB's Contact database
const databaseURL = `mongodb+srv://localhost:localhost@mern.jucmp8x.mongodb.net/MERN?retryWrites=true&w=majority`;
mongoose.connect(databaseURL)
    .then((data) => {
        console.log("Connected To The MERN Database!");
        // Making the server to listen on port after we get connected to our database
        app.listen(8181);
        console.log("Server Live On Port 8181");
    })
    .catch((error) => {
        console.log("Error Connecting With The Database Or Localhost!");
    });



// Defining a middleware which will run on each request but we'll use next function in order to force execution of code written after it as by default program stops executing after encountering any middleware
app.use((request, response, next) => {
    console.log("New Request Made!");
    console.log("Host : ", request.hostname);
    console.log("Path : ", request.path);
    console.log("Method : ", request.method);
    next();
});



// Defining a GET request in order to serve all the contacts present in the database
app.get('/view-data', (request, response) => {
    RosterPi.find()
        .then((data) => {
            response.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
});