var db = require("../models");

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  app.get("/api/genreID", function(req, res) {
    db.GenreID.findAll({}).then(function(dbGenreID) {
      res.json(dbGenreID);
    });
  });

  app.get("/api/genreID/:id", function(req, res) {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.GenreID.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbGenreID) {
      res.json(dbGenreID);
    });
  });

  app.post("/api/genreID", function(req, res) {
    // Create an Author with the data available to us in req.body
    console.log(req.body);
    db.GenreID.create(req.body).then(function(dbGenreID) {
      res.json(dbGenreID);
    });
  });

  app.delete("/api/genreID/:id", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.GenreID.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbGenreID) {
      res.json(dbGenreID);
    });
  });

};
