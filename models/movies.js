'use strict';
module.exports = (sequelize, DataTypes) => {
  const movies = sequelize.define('movies', {
    adult: DataTypes.BOOLEAN,
    backdrop_path: DataTypes.STRING,
    budget: DataTypes.INTEGER,
    homepage: DataTypes.STRING,
    movieid: DataTypes.INTEGER,
    imdb_id: DataTypes.STRING,
    original_language: DataTypes.STRING,
    original_title: DataTypes.STRING,
    overview: DataTypes.STRING,
    popularity: DataTypes.FLOAT,
    poster_path: DataTypes.STRING,
    release_date: DataTypes.STRING,
    revenue: DataTypes.INTEGER,
    runtime: DataTypes.INTEGER,
    status: DataTypes.STRING,
    tagline: DataTypes.STRING,
    title: DataTypes.STRING,
    video: DataTypes.BOOLEAN,
    vote_average: DataTypes.FLOAT,
    vote_count: DataTypes.INTEGER,
    userid: DataTypes.INTEGER,
  }, {});
  movies.associate = function(models) {
      models.movies.belongsTo(models.users, {
        as: "users",
        foreignKey: "id",
      })
  };
  return movies;
};