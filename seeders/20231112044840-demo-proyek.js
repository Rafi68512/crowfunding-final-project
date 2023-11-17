"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "proyek",
      [
        {
          nama: "Proyek A",
          deskripsi: "Deskripsi Proyek A",
          kategori_id: 1,
        },
        {
          nama: "Proyek B",
          deskripsi: "Deskripsi Proyek B",
          kategori_id: 2,
        },
        {
          nama: "Proyek C",
          deskripsi: "Deskripsi Proyek C",
          kategori_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("proyek", null, {});
  },
};
