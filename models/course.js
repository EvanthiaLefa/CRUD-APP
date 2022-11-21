const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: String,
    students: {
        type: [String],
        default: ['Lili', 'Nick']
    },
    trainer: String,
    assignments: [String]
})

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;