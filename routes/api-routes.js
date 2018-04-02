// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var User = require("../models/users.js");

// Routes
// =============================================================
module.exports = function(app) {



    // Get all users
    app.get("/api/all-users", function(req, res) {
  
      // Finding all users, and then returning them to the user as JSON.
      // Sequelize queries are asynchronous, which helps with perceived speed.
      // If we want something to be guaranteed to happen after the query, we'll use
      // the .then function
      User.findAll({}).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
      });
  
    });
  
    // Add a user
    app.post("/api/new-user", function(req, res) {
  
      console.log("User Data:");
      console.log(req.body);
  
      User.create({
        username: req.body.username,
        password: req.body.password,
        imgURL:req.body.imgURL
      }).then(function(results) {
        // `results` here would be the newly created user
        res.end();
      });
  
    });

    // Find one user
    app.get("/api/:users?", function(req, res) {
      // If the user provides a specific character in the URL...
      if (req.params.users) {
        // Then display the JSON for ONLY that user.
        // (Note how we're using the ORM here to run our searches)
        User.findOne({
          where: {
            routeName: req.params.users
          }
        }).then(function(result) {
          return res.json(result);
        });
      }
      else {
        alert("Username or password was not correct, please try again.")
      }
    });
  












  };