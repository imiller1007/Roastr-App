// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models/index.js");
// =============================================================

module.exports = function(app) {

  // Get all users ====================================================//
  app.get("/api/users", function(req, res) {
    db.user.findAll({}).then(function(results) {
      res.json(results);
    });
  });
    
  // Find one user ====================================================//
  app.get("/api/users/:users?", function(req, res) {
    if (req.params.users) {
      db.user.findOne({
        where: {
          username: req.params.users
        }
      }).then(function(result) {
        req.session.user = result.dataValues
        return res.json(result);
      });
    }
    else {
      alert("Username or password was not correct, please try again.")
    }
  });

  // Add a user ====================================================//
  app.post("/api/users", function(req, res) {
    console.log("User Data:");
    console.log(req.body);
    db.user.create({
      username: req.body.username,
      password: req.body.password,
      imgURL:req.body.imgURL
    }).then(function(results) {
      req.session.user = results.dataValues
      console.log(req.session.user);
      // `results` here would be the newly created user
      res.json(req.session.user);
      // res.end();
    });
  });

  // Delete a user ====================================================//
  app.delete("/api/users/:users", function(req, res) {
    db.user.destroy({
      where: {
        username: req.params.users
      }
    }).then(function(result) {
      req.session.user = result.dataValues
      return res.json(result);
    });
  });

  //Grab session data for front-end ====================================================//
  app.get("/api/sessioninfo", function(req, res){
    var userInfo = req.session.user
    res.json(userInfo);
  });

};