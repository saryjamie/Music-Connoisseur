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

  // Get route for retrieving comments from a single commenterName
  app.get("/api/:commenterName/comments", function(req, res) {
    db.Comment.findAll({
      where: {
        commenterName: req.params.commenterName
      }
    }).then(function(dbComment) {
      console.log(dbComment);
      res.json(dbComment);
    });
  });

  // POST route for saving a new comment
  app.post("/api/comments", function(req, res) {
    db.Comment.create(req.body).then(function(dbComment) {
      res.json(dbComment);
    });
  });
};