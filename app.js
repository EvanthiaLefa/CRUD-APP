const express = require('express');
const app = express();
const path = require('path')
const Course = require('./models/course');
const Student = require('./models/student');
const Trainer = require('./models/trainer');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const Assignment = require('./models/assignment');
mongoose.connect('mongodb://localhost:27017/schoolApp', {useNewUrlParser: true, useUnifiedTopology: true})
const methodOverride = require('method-override');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DB Connected!!") 
});

//use ejs-locals for all ejs templates , I'm telling my app to use for the ejs engine the ejsMate;
app.engine('ejs', ejsMate);
//  view engine:  template engine so i can use the ejs template engine
app.set('view engine', 'ejs');
// to work from different directories
app.set('views', path.join(__dirname, 'views'))

//The express.urlencoded() function is a built-in middleware function  and it parses incoming requests with urlencoded payloads and is based on body-parser. 
//(I use it to parse the information from the POST req.body so I can have access)
app.use(express.urlencoded({extended:true}));
// override with POST having ?_method=
app.use(methodOverride('_method'))

app.get('/', (req,res) =>{
    res.send('Its Working')
})
app.get('/school', (req,res) =>{
    res.render('home')
})

app.get('/courses' , async (req,res) => {
   const courses =  await Course.find({});
   res.render('courses/index', {courses})
})

app.get('/courses/new' , async (req,res)=>{
    const students =  await Student.find({});
    const trainers =  await Trainer.find({});
    const assignments =  await Assignment.find({});
    res.render('courses/new', {students , trainers , assignments})
})
app.post('/courses', async (req,res)=>{
    const newCourse = new Course(req.body);
    await newCourse.save()
    res.redirect(`/courses/${newCourse._id}`)
})

app.get('/courses/:id', async(req,res) =>{
    const { id } = req.params;
    const course = await Course.findById(id)
    res.render('courses/show' , {course})
})

app.get('/courses/:id/edit' , async (req,res)=>{
    const { id } = req.params;
    const course = await Course.findById(id)
    const students =  await Student.find({});
    const trainers =  await Trainer.find({});
    const assignments =  await Assignment.find({});
    res.render('courses/edit', { course , students , trainers , assignments})
})

app.put('/courses/:id' , async(req, res)=>{
    const { id } = req.params;
    const course = await Course.findByIdAndUpdate(id, req.body, {runValidators: true , new: true})
    res.redirect(`/courses/${course._id}`)
})

app.delete('/courses/:id' , async (req, res)=>{
    const { id } = req.params;
    const deletedCourse = await Course.findByIdAndDelete(id);
    res.redirect('/courses')
})

app.get('/students' , async (req,res) => {
    const students =  await Student.find({});
    res.render('students/index', {students})
 })

 app.get('/students/new' , async (req,res)=>{
    res.render('students/new')
})
app.post('/students', async (req,res)=>{
    const newStudent = new Student(req.body);
    await newStudent.save()
    res.redirect(`/students/${newStudent._id}`)
})

 app.get('/students/:id', async(req,res) =>{
    const { id } = req.params;
    const student = await Student.findById(id)
    res.render('students/show' , {student})
})

app.get('/students/:id/edit' , async (req,res)=>{
    const { id } = req.params;
    const student = await Student.findById(id)
    res.render('students/edit', {student})
})

app.put('/students/:id', async(req,res) =>{
    const { id } = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body, {runValidators: true , new: true})
    res.redirect(`${student._id}`)
})

app.delete('/students/:id' , async (req, res)=>{
    const { id } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(id);
    res.redirect('/students')
})

 app.get('/trainers' , async (req,res) => {
    const trainers =  await Trainer.find({});
    res.render('trainers/index', {trainers})
 })

 app.get('/trainers/new' , async (req,res)=>{
    res.render('trainers/new')
})
app.post('/trainers', async (req,res)=>{
    const newTrainer = new Trainer(req.body);
    await newTrainer.save()
    res.redirect(`/trainers/${newTrainer._id}`)
})

 app.get('/trainers/:id', async(req,res) =>{
    const { id } = req.params;
    const trainer= await Trainer.findById(id)
    res.render('trainers/show' , {trainer})
})

app.get('/trainers/:id/edit' , async (req,res)=>{
    const { id } = req.params;
    const trainer = await Trainer.findById(id)
    res.render('trainers/edit', {trainer})
})

app.put('/trainers/:id', async(req,res) =>{
    const { id } = req.params;
    const trainer = await Trainer.findByIdAndUpdate(id, req.body, {runValidators: true , new: true})
    res.redirect(`${trainer._id}`)
})

app.delete('/trainers/:id' , async (req, res)=>{
    const { id } = req.params;
    const deletedTrainer = await Trainer.findByIdAndDelete(id);
    res.redirect('/trainers')
})

 app.get('/assignments' , async (req,res) => {
    const assignments =  await Assignment.find({});
    res.render('assignments/index', {assignments})
 })

 app.get('/assignments/new' , async (req,res)=>{
    const students =  await Student.find({});
    const courses =  await Course.find({});
    res.render('assignments/new', {students , courses})
})
app.post('/assignments', async (req,res)=>{
    const newAssignment = new Assignment(req.body);
    await newAssignment.save()
    res.redirect(`/assignments/${newAssignment._id}`)
})

 app.get('/assignments/:id', async(req,res) =>{
    const { id } = req.params;
    const assignment= await Assignment.findById(id)
    res.render('assignments/show' , {assignment})
})

app.get('/assignments/:id/edit' , async (req,res)=>{
    const { id } = req.params;
    const assignment= await Assignment.findById(id)
    const students =  await Student.find({});
    const courses =  await Course.find({});
    res.render('assignments/edit', {assignment, students , courses})
})

app.put('/assignments/:id', async(req, res)=>{
    const { id } = req.params;
    const assignment = await Assignment.findByIdAndUpdate(id, req.body, {runValidators: true , new: true})
    res.redirect(`${assignment._id}`)
})

app.delete('/assignments/:id' , async (req, res)=>{
    const { id } = req.params;
    const deletedAssignment = await Assignment.findByIdAndDelete(id);
    res.redirect('/assignments')
})

app.listen(3000, ()=>{
    console.log("APP IS LISTENING ON PORT 3000!")
})