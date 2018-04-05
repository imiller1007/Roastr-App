// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
    // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    
  });


  app.get("/main", function(req, res) {
    if(!req.session.user){
      res.redirect("/")
    }
    else{
    res.sendFile(path.join(__dirname, "../public/main.html"))
    }
    
    

    console.log("==================================")
    console.log(req.session.user)
    console.log("==================================")
  });

  app.get("/roast", function(req, res){
    if(!req.session.user){
      res.redirect("/")
    }
    else{
    res.sendFile(path.join(__dirname, "../public/roast.html"))
    }
  });

  app.get("/inbox", function(req, res){
    if(!req.session.user){
      res.redirect("/")
    }
    else{
    res.sendFile(path.join(__dirname, "../public/inbox.html"))
    }
  });

  app.get("/reply", function(req, res){
    res.sendFile(path.join(__dirname, "../public/reply"))
  })
  
};
