'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Courses', [
      {
        name: 'FullStack',
        description: 'Formação fullStack',
        creation_date: '2019-06-01T00:00:00',
        active: true,
        duration: 12,
      },
      {
        name: 'BackEnd',
        description: 'Formação BackEnd',
        creation_date: '2019-06-01T00:00:00',
        active: true,
        duration: 4,
      },
      {
        name: 'FrontEnd',
        description: 'Formação FrontEnd',
        creation_date: '2019-06-01T00:00:00',
        active: true,
        duration: 4,
      },
      {
        name: 'Mobile',
        description: 'Formação Mobile',
        creation_date: '2023-02-01T00:00:00',
        active: false,
        duration: 6,
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Courses', null, {});

  }
};
