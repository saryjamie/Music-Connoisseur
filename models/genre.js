// Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// var genre = {
//   all: function(cb) {
//     orm.all("genre", function(res) {
//       cb(res);
//     });
//   },
  // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("genre", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("genre", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
// };

// Export the database functions for the controller (genreController.js).
// module.exports = genre;

module.exports = function(sequelize, DataTypes) {
    var Genre = sequelize.define("Genre", {
      // Giving the Genre model a name of type STRING
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
  
    Genre.associate = function(models) {
      // Associating Genre with Posts
      // When a Genre is deleted, also delete any associated Posts
      Genre.hasMany(models.Comment, {
        onDelete: "cascade"
      });
    };
  
    return Genre;
  };
  