// THIS IS A FILE I WILL RUN ON ITS OWN ANY TIME I WANT TO GET SOME NEW DATA IN MY DATABASE
const mongoose = require('mongoose');
const Course = require('./models/course');
const Student = require('./models/student');
const Trainer = require('./models/trainer');
const Assignment = require('./models/assignment')

mongoose.connect('mongodb://localhost:27017/schoolApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('MONGO CONNECTION OPEN!!')
})
.catch(err =>{
    console.log('OH NO MONGO CONNECTION ERROR...');
    console.log(err)
})

// const course = new Course({
//     name: 'Math',
//     students:[ 'Vakou', 'Eva'],
//     trainer: 'Lisa',
//     assignments: ['test']
// })
// course.save().then(()=>{
//     console.log(course);
// })
// .catch(err=>{
//     console.log(err)
// })

// const seedCourses = [
//     {
//         name: 'Math',
//         students: ['Vakou', 'Eva'],
//         trainer: 'Lisa',
//         assignments: ['test']
//     },
//     {
//         name: 'History',
//         students: ['Vakou', 'Eva'],
//         trainer: 'Makis',
//         assignments: ['test1']
//     },
//     {
//         name: 'Chem',
//         students: ['Vakou', 'John'],
//         trainer: 'Nick',
//         assignments: ['test3']
//     },
//     {
//         name: 'Physics',
//         students: ['Hermione', 'Ron'],
//         trainer: 'Harry',
//         assignments: ['test5', 'test4']
//     }
// ]

//     Course.insertMany(seedCourses)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err =>{
//         console.log(err
//             )
//     })

// const seedStudents = [
//     {
//          firstName: 'Eva',
//           lastName: 'Lef'
//     },
//     {
//        firstName: 'Takis',
//           lastName: 'Vakou'
//     },
//     {
//         firstName: 'Lena',
//           lastName: 'Papale'
//     },
//     {
//         firstName: 'George',
//           lastName: 'Lefito'
//     }
// ]


//     Student.insertMany(seedStudents)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err =>{
//         console.log(err
//             )
//     })

// const seedTrainers = [
//     {
//         firstName: 'Kali',
//         lastName: 'Felia'
//     },
//     {
//         firstName: 'Sangu',
//         lastName: 'Sngkai'
//     },
//     {
//         firstName: 'Anela',
//         lastName: 'pepe'
//     },
//     {
//         firstName: 'Gogo',
//         lastName: 'Akai'
//     }
// ]


//     Trainer.insertMany(seedTrainers)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err =>{
//         console.log(err
//             )
//     })

// const seedAssignments = [
//     {
//     title: 'Test',
//     student: 'Eva',
//     nameOfCourse: 'Math'
//     },
//     {
//         title: 'Test1',
//     student: 'Vakou',
//     nameOfCourse: 'History'
//     }
// ]


//     Assignment.insertMany(seedAssignments)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err =>{
//         console.log(err
//             )
//     })