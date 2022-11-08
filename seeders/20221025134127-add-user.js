'use strict';

 /**@type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
      await queryInterface.bulkInsert('users', [{
        name: 'John Doe',
        email: 'cbo@gmail.com',
        password:'xdddd'
      },
      {
        name: 'Simón',
        email: 'simon@gmail.com',
        password:'jajajaja'
      }

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('users', null, {});
     
  }
};
