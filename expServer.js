const express = require("express");

const app = express();

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

app.listen(5000, function(req, res){
    console.log("server is running at port 5000");
});