module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
      commenterName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      mediaLink: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      }
    });
  
    Comment.associate = function(models) {
      // We're saying that a Comment should belong to a Genre
      // A Comment can't be created without a Genre due to the foreign key constraint
      Comment.belongsTo(models.Genre, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Comment;
  };
  