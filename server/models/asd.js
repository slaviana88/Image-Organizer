'use strict';
module.exports = (sequelize, DataTypes) => {
  var Asd = sequelize.define('Asd', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Asd;
};