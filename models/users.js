'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  users.associate = function(models) {
   users.hasMany(models.movies, {
      as: "movies",
      foreignKey: "id"
    }),
    models.users.hasMany(models.tvshows, {
      as: "tvshows",
      foreignKey: "id"
    }),
    models.users.hasMany(models.persons, {
      as: "people",
      foreignKey: "id"
    })
  };
  return users;
};