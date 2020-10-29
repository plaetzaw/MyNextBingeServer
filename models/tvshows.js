'use strict';
module.exports = (sequelize, DataTypes) => {
  const tvshows = sequelize.define('tvshows', {
    backdrop_path: DataTypes.STRING,
    first_air_date: DataTypes.STRING,
    homepage: DataTypes.STRING,
    tvid: DataTypes.INTEGER,
    in_production: DataTypes.BOOLEAN,
    last_air_date: DataTypes.STRING,
    name: DataTypes.STRING,
    number_of_episodes: DataTypes.STRING,
    number_of_seasons: DataTypes.STRING,
    original_language: DataTypes.STRING,
    original_name: DataTypes.STRING,
    overview: DataTypes.STRING,
    popularity: DataTypes.FLOAT,
    poster_path: DataTypes.STRING,
    status: DataTypes.STRING,
    type: DataTypes.STRING,
    vote_average: DataTypes.FLOAT,
    vote_count: DataTypes.INTEGER
  }, {});
  tvshows.associate = function(models) {
    // associations can be defined here
  };
  return tvshows;
};