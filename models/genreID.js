module.exports = function(sequelize, DataTypes) {
    var GenreID = sequelize.define("GenreID", {
      // Giving the Author model a name of type STRING
      genreName: DataTypes.STRING,
      genreDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
  
    GenreID.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      GenreID.hasMany(models.genreName, {
        onDelete: "cascade"
      });
    };
  
    return GenreID;
  };
  