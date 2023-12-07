'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PlayLists', {
      // ,
      // ,
      // date: Sequelize.DATE,
      // ,
      // doctorId:Sequelize.INTEGER,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:  Sequelize.INTEGER
      },
      
      length: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      numberOfSongs: {
        type :Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PlayLists');
  }
};