'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Albums', [{
      title : 'Our first album',
      description : 'First meeting with my dog.',
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Albums', [{
      title :'Our first album'
    }])
  }
};
