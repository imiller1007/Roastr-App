// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models/index.js");
// =============================================================


module.exports = function(app) {


//======================= USER ROUTES =========================================
//=============================================================================

    // Get all users
    app.get("/api/all-users", function(req, res) {
  
      // Finding all users, and then returning them to the user as JSON.
      // Sequelize queries are asynchronous, which helps with perceived speed.
      // If we want something to be guaranteed to happen after the query, we'll use
      // the .then function
      db.user.findAll({}).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
      });
  
    });
  
    // Add a user
    app.post("/api/new-user", function(req, res) {
  
      console.log("User Data:");
      console.log(req.body);
  
      db.user.create({
        username: req.body.username,
        password: req.body.password,
        imgURL:req.body.imgURL
      }).then(function(results) {
        req.session.user = results.dataValues
        console.log(req.session.user)
        // `results` here would be the newly created user
        res.end();
      }).catch(function(error){
        res.json(error)
      })
  
    });

    // Find one user
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

    //Grab session data for front-end
    app.get("/api/sessioninfo", function(req, res){
      var userInfo = req.session.user

      res.json(userInfo)
    })





  
//======================= ROAST ROUTES =========================================
//==============================================================================
  
// GET route for getting all of the roasts
app.get("/api/all-roasts", function(req, res) {
  db.Roast.findAll({}).then(function(results) {
    // results are available to us inside the .then
    res.json(results);
  });
});

app.get("/api/inbox-roasts/:id", function(req, res){
  db.Roast.findAll({
    where: {
      userid2: req.params.id,
      response: null
    }
  })
})


// Get route for retrieving a single Roast
app.get("/api/select-roast/:id", function(req, res) {
  db.Roast.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(data) {
    console.log(data);
    res.json(data);
  });
});


// DELETE route for deleting roast
app.delete("/api/del-roast/:id", function(req, res) {
  db.Roast.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(data) {
    res.json(data);
  });
});



};