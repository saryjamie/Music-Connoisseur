// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/:genreId/comments", function(req, res) {
    var query = {};
    if (req.query.genreID_id) {
      query.genreId = req.query.genreID_id;
    }
    db.Comment.findAll({
      where: query
    }).then(function(dbGenreName) {
      res.json(dbGenreName);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/genreName/:id", function(req, res) {
    db.GenreName.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbGenreName) {
      console.log(dbGenreName);
      res.json(dbGenreName);
    });
  });

  // POST route for saving a new post
  app.post("/api/comment", function(req, res) {
    db.GenreName.create(req.body).then(function(dbGenreName) {
      res.json(dbGenreName);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/comment/:id", function(req, res) {
    db.GenreName.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbGenreName) {
      res.json(dbGenreName);
    });
  });

  // PUT route for updating posts
  app.put("/api/genreName", function(req, res) {
    db.GenreName.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbGenreName) {
      res.json(dbGenreName);
    });
  });
};