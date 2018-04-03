
var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the ROASTS for userA
  app.get("/api/roast", function(req, res) {
    var query = {};
    if (req.query.userA) {
      query.User = req.query.userA;
    }
    db.userid1.findAll({
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

  // PUT route for updating roasts  ?
  app.put("/api/roast", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          response: req.body.response
        }
        //?
      }).then(function(dbRoast) {
      res.json(dbRoast);
    });
  });
};

