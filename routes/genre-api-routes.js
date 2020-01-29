var db = require("../models");

module.exports = function(app) {
  // Find all Genres and return them to the user with res.json
  app.get("/api/genres", function(req, res) {
    db.Genre.findAll({ include: [db.Comment] }).then(function(dbGenres) {
      res.json(dbGenres);
    });
  });

  app.get("/api/genres/:name", function(req, res) {
    // Find one Genre with the name in req.params.name and return them to the user with res.json
        console.log(res.params.name)
        db.Genre.findOne({
          where: {
            name: res.params.name
          },
          include: [db.Comment]
        }).then(function(dbGenre) {
          res.render("genre");
          console.log(dbGenre);
        });
          // window.location.href = "../genre.html";
  });

  app.post("/api/genres", function(req, res) {
    // Create a Genre with the data available to us in req.body
    console.log(req.body);
    db.Genre.create(req.body).then(function(dbGenre) {
      res.json(dbGenre);
    });
  });

  app.delete("/api/genres/:name", function(req, res) {
    // Delete the Genre with the name available to us in req.params.name
    db.Genre.destroy({
      where: {
        name: req.params.name
      }
    }).then(function(dbGenre) {
      res.json(dbGenre);
    });
  });

};
