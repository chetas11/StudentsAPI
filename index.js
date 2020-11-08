// const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser")

const app = express();



app
.use(bodyParser.json())
.get("/",(request,response)=> {
 
    response.send("<h1>Home Page</h1>")
})
.get("/about",(request,response)=> {
    response.send("<h1>About Page</h1>")
})
.post("/cars",(request,response)=> {
    response.json({
        model:"XYA",
        brand: "tesla"
    })
    console.log(request.body)
})
.post("/cars/:model",(request,response)=> {
    response.json({
        requestedModel: request.params.model
    })
    console.log(request.body)
})
.get("*",(request,response)=> {
    response.status(404).send("<h1>Page not found</h1>")
}).listen(8000)