const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainerSchema = new Schema({
    firstName: String,
    lastName: String
})

const Trainer = mongoose.model('Trainer' , trainerSchema);
module.exports = Trainer;