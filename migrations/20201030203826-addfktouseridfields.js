'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addConstraint("movies", {
        fields: ["userid"],
        type: "FOREIGN KEY",
        name: "adding_a_foreignkey_to_movies",
        references: {
          table: "users",
          field: "id"
        }
      }),
    queryInterface.addConstraint("tvshows", {
      fields: ["userid"],
      type: "FOREIGN KEY",
      name: "adding_a_foreignkey_to_tvshows",
      references: {
        table: "users",
        field: "id"
      }
    }),
    queryInterface.addConstraint("persons", {
      fields: ["userid"],
      type: "FOREIGN KEY",
      name: "adding_a_foreignkey_to_persons",
      references: {
        table: "users",
        field: "id"
      }
    })
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeConstraint("movies", "adding_a_foreignkey_to_movies"),
      queryInterface.removeConstraint("tvshows", "adding_a_foreignkey_to_tvshows"),
      queryInterface.removeConstraint("persons", "adding_a_foreignkey_to_persons"),
    ])
  }
};
