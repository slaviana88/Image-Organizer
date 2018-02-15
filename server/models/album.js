'use strict';
module.exports = (sequelize, DataTypes) => {
  var Album = sequelize.define(
    'Album',
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      longtitude: DataTypes.DECIMAL,
      latitude: DataTypes.DECIMAL
    },
    {
      classMethods: {
        associate: function(models) {
          Album.hasMany(models.Image, {
            foreignKey: 'AlbumId',
            as: 'images'
          });
        }
      }
    }
  );

  return Album;
};
