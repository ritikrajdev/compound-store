'use strict';

const fs = require('fs');
const {parse} = require('@fast-csv/parse');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const allRows = [];

    await new Promise(resolve => {
      fs.createReadStream(__dirname + '/compound.csv')
        .pipe(parse({
          headers: true,
        }))
        .on('error', error => console.error(error))
        .on('data', row => {
          allRows.push({
            id: row.id,
            compoundName: row.CompoundName,
            compoundDescription: row.CompounrDescription,
            compoundImageUrl: row.strImageSource            
          });
        })
        .on('end', () => {
          queryInterface.bulkInsert('compounds', allRows);
          resolve();
        });
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('compounds', null);
  }
};
