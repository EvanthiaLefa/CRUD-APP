const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    title: String,
    student: String,
    nameOfCourse: String
})

const Assignment = mongoose.model('Assignment', assignmentSchema);
module.exports = Assignment;