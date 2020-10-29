'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tvshows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      backdrop_path: {
        type: Sequelize.STRING
      },
      first_air_date: {
        type: Sequelize.STRING
      },
      homepage: {
        type: Sequelize.STRING
      },
      tvid: {
        type: Sequelize.INTEGER
      },
      in_production: {
        type: Sequelize.BOOLEAN
      },
      last_air_date: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      number_of_episodes: {
        type: Sequelize.STRING
      },
      number_of_seasons: {
        type: Sequelize.STRING
      },
      original_language: {
        type: Sequelize.STRING
      },
      original_name: {
        type: Sequelize.STRING
      },
      overview: {
        type: Sequelize.STRING
      },
      popularity: {
        type: Sequelize.FLOAT
      },
      poster_path: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      vote_average: {
        type: Sequelize.FLOAT
      },
      vote_count: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('tvshows');
  }
};