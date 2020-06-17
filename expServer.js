const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.send("Welcome to my server");
})

app.get("/about", function(req, res){
    res.send("I am web developer.");
})

app.get("/contactUs", function(req, res){
    res.send("Contact me through email.");
})

app.get("/calculator", function(req, res){
    res.sendFile(__dirname + "/index.html");
})


app.post("/calculator", function(req, res){
    console.log(req.body);
    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);
    
    let sum = n1 + n2;
    res.send("Answer : " +sum);
})

app.listen(5000, function(req, res){
    console.log("server is running at port 5000");
});