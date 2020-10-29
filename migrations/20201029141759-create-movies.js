'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      adult: {
        type: Sequelize.BOOLEAN
      },
      backdrop_path: {
        type: Sequelize.STRING
      },
      budget: {
        type: Sequelize.INTEGER
      },
      homepage: {
        type: Sequelize.STRING
      },
      movieid: {
        type: Sequelize.INTEGER
      },
      imdb_id: {
        type: Sequelize.STRING
      },
      original_language: {
        type: Sequelize.STRING
      },
      original_title: {
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
      release_date: {
        type: Sequelize.STRING
      },
      revenue: {
        type: Sequelize.INTEGER
      },
      runtime: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      tagline: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      video: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('movies');
  }
};