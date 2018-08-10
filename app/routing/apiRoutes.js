
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var friends = [];

module.exports = function(app){

    app.get("/api/friends", function(req,res){

        return res.json(friends);

    });

    app.post("/api/friends", function(req,res){

        var newUser = "";

        friends.push(newUser);

        res.json(newUser);

    });
;}