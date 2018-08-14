
var friends = require("../data/friends");


module.exports = function(app){

    app.get("/api/friends", function(req,res){

        return res.json(friends);

    });

    app.get("/api/users", function(req,res) {
        return res.json(users);
    });

    app.post("/api/friends", function(req,res){

        friends.push(req.body);

        res.json(true);


    });
;}