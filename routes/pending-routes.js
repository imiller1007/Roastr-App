
var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the ROASTS 
 
  app.get("/api/roast", function(req, res) {
    var query = {};
    if (req.query.userid1) {
      query.Userid1 = req.query.userid1;
    }
    db.Post.findAll({
      where: query
    }).then(function(dbRoast) {
      res.json(dbRoast);
    });
  });

  // DELETE route for deleting ROASTS?
  app.delete("/api/roast/:id", function(req, res) {
    db.Roast.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbRoast) {
      res.json(dbRoast);
    });
  });

};

