const mongoose = require('mongoose');


// Schema will define the structure of our database object
const Schema = mongoose.Schema;


// Creating an object of Schema type and defining the structure of the data we need to store in the database
const RosterPiSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    RFID: String,
    Data: String,
    Time: String
}, { collection: 'RosterPi' });

// Storing the model and its schema type and then exporting the model
const RosterPi = mongoose.model('RosterPi', RosterPiSchema);


// Exporting the model in order to make it available for all other files to access
module.exports = RosterPi;