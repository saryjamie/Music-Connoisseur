module.exports = function(sequelize, DataTypes) {
    var GenreName = sequelize.define("genreName", {
      commenterName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      commentText: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      mediaLink: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    Post.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Post.belongsTo(models.Author, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return GenreName;
  };
  