'use strict';
module.exports = (sequelize, DataTypes) => {
  var Image = sequelize.define(
    'Image',
    {
      name: DataTypes.STRING,
      pathToFile: DataTypes.STRING
    },
    {
      classMethods: {
        associate: function(models) {
          Image.belongsTo(models.Album, {
            foreignKey: 'AlbumId',
            onDelete: 'CASCADE'
          });
        }
      }
    }
  );
  return Image;
};
