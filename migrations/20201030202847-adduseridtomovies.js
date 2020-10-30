'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
   queryInterface.addColumn("movies", "userid", {
     type: Sequelize.INTEGER,
   }),
   queryInterface.addColumn("tvshows", "userid", {
     type: Sequelize.INTEGER,
   }),
   queryInterface.addColumn("persons", "userid", {
     type: Sequelize.INTEGER,
   })
  ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
   queryInterface.removeColumn("movies", "userid"),
   queryInterface.removeColumn("tvshows", "userid"),
   queryInterface.removeColumn("persons", "userid")
  ])
  }
};
