'use strict';
module.exports = (sequelize, DataTypes) => {
  const persons = sequelize.define('persons', {
    birthday: DataTypes.STRING,
    known_for_department: DataTypes.STRING,
    deathday: DataTypes.STRING,
    personid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    gender: DataTypes.INTEGER,
    biography: DataTypes.STRING,
    popularity: DataTypes.FLOAT,
    place_of_birth: DataTypes.STRING,
    profile_path: DataTypes.STRING,
    adult: DataTypes.BOOLEAN,
    imdb_id: DataTypes.STRING,
    homepage: DataTypes.STRING
  }, {});
  persons.associate = function(models) {
    // associations can be defined here
  };
  return persons;
};