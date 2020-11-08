const express = require("express");
const bodyParser = require("body-parser");
const studentData = require("./studentsData");


const app = express();

app
.use(bodyParser.json())
.get("/students", (req,res) =>{
    res.status(200).json({
        data:studentData
    })
})
.post("/students",(req,res)=>{
    req.body.students.forEach((student)=>{
        studentData.push(student)
    })
    res.status(200).json({
    status:"success"
    })
})
.get("/students/:id",(req,res)=>{
    res.status(200).json({
        data: studentData.find(
            (student)=> student.id === parseInt(req.params.id)
        )
    })
}).listen(8000)
