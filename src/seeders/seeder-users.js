'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'example@example.com',
      password: '123456',
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: new Date(),
      address: 'usa',
      phonenumber:'03253243',
      gender: 1,
      image:'fedgdfdfds',
      roleId:'RPLE',
      numberOfFollower:'fvsdfesd',
      numberOfFollowing:'wfesfssd',
      namePlayList:'efesf',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
