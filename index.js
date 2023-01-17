const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors());
const courses = require('./data/courses.json')
const course = require('./data/course.json')

app.get('/', (req, res) => {
    res.send('Course Api running')
});
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/course', (req, res) => {
    res.send(course)
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id
    const chossenCourse = course.find(c => c._id === id)
    res.send(chossenCourse)
    console.log(req.params)
})
app.listen(port, () => {
    console.log('sql releted server runnig on port', port)
})