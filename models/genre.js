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
  