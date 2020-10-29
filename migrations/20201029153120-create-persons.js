'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('persons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      birthday: {
        type: Sequelize.STRING
      },
      known_for_department: {
        type: Sequelize.STRING
      },
      deathday: {
        type: Sequelize.STRING
      },
      id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.INTEGER
      },
      biography: {
        type: Sequelize.STRING
      },
      popularity: {
        type: Sequelize.FLOAT
      },
      place_of_birth: {
        type: Sequelize.STRING
      },
      profile_path: {
        type: Sequelize.STRING
      },
      adult: {
        type: Sequelize.BOOLEAN
      },
      imdb_id: {
        type: Sequelize.STRING
      },
      homepage: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('persons');
  }
};