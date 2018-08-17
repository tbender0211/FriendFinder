
var friends = require("../data/friends");


module.exports = function(app){

    app.get("/api/friends", function(req,res){

        return res.json(friends);

    });

    // app.get("/api/friends", function(data){

    //     for(i=0; i < friends.length; i++){
            
    //         var match = getClosest.number(newUser.total, friends[i].total);
    
    //         console.log(match);
    
    //     }
    
    // });

    app.post("/api/friends", function(req,res){

        friends.push(req.body);

        res.json(true);


    });
;}