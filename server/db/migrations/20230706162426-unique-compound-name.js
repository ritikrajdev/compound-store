'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('compounds', {
      fields: ['compoundName'],
      type: 'unique',
      name: 'unique_compoundName'
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('compounds', 'unique_compoundName');
  }
};
