'use strict';
module.exports = (sequelize, DataTypes) => {
  var Album = sequelize.define('Album', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    classMethods: {
      associate: function(models) {
        Album.hasMany(models.Image, {
          foreignKey: 'imageId',
          as: 'images'
        })
      }
    }
  });


  return Album;
};
