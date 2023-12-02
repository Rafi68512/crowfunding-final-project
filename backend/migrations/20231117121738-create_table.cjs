// migration

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("Admin", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        allowNull: false,
      },
      username: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
    });

    await queryInterface.createTable("Kategori", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama: Sequelize.STRING,
    });

    await queryInterface.createTable("Proyek", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama: Sequelize.STRING,
      deskripsi: Sequelize.TEXT,
      kategori_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Kategori",
          key: "id",
        },
        allowNull: false,
      },
      goal: Sequelize.INTEGER,
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("Komentar", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        allowNull: false,
      },
      proyek_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Proyek",
          key: "id",
        },
        allowNull: false,
      },
      isi: Sequelize.TEXT,
    });

    await queryInterface.createTable("Pembayaran", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        allowNull: false,
      },
      proyek_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Proyek",
          key: "id",
        },
        allowNull: false,
      },
      jumlah_pembayaran: Sequelize.INTEGER,
      tanggal_pembayaran: Sequelize.DATE,
    });

    // Tambahkan definisi foreign key sesuai kebutuhan
    // ...
  },

  down: async (queryInterface, Sequelize) => {
    // Jika diperlukan, tambahkan logika untuk rollback
    // ...

    await queryInterface.dropTable("Komentar");
    await queryInterface.dropTable("Pembayaran");
    await queryInterface.dropTable("Proyek");
    await queryInterface.dropTable("Kategori");
    await queryInterface.dropTable("Admin");
    await queryInterface.dropTable("Users");

    // Jika ada foreign key yang perlu dihapus, tambahkan perintah drop di sini
    // ...
  },
};
