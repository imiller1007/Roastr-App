// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models/index.js");
// =============================================================

module.exports = function(app) {

// GET route for getting all of the roasts ====================================================//
app.get("/api/roasts", function(req, res) {
    db.roast.findAll().then(function(results) {
        res.json(results);
    });
});

// Get route for retrieving a single Roast ====================================================//
app.get("/api/roasts/:id", function(req, res) {
    db.roast.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(data) {
        console.log(data);
        res.json(data);
    });
});

// Post route for creating a single Roast ====================================================//
app.post("/api/roasts", function(req, res){
    db.roast.create(req.body).then(function(data){
        res.json(data);
    })
});

// Delete route for deleting a single roast ====================================================//
app.delete("/api/roasts/:id", function(req, res) {
    db.roast.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(data) {
        res.json(data);
    });
});

// Put route for updating a single roast ====================================================//
app.put("/api/roasts/:id", function(req, res) {
    db.roast.update(
        req.body,
    {
    where: {
        id: req.body.id
    }
    }).then(function(data) {
        res.json(data);
    });
});

};