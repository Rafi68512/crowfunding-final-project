"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Seeder untuk Tabel Users
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          nama: "John Doe",
          email: "john@example.com",
          password: "hashed_password",
        },
        {
          nama: "Jane Smith",
          email: "jane@example.com",
          password: "hashed_password",
        },
      ],
      {}
    );

    // Seeder untuk Tabel Admin
    await queryInterface.bulkInsert(
      "Admin",
      [
        {
          user_id: 1,
          username: "admin_john",
          email: "admin_john@example.com",
          password: "hashed_password",
        },
      ],
      {}
    );

    // Seeder untuk Tabel Login
    await queryInterface.bulkInsert(
      "Login",
      [
        {
          user_id: 1,
          timestamp: new Date(),
        },
      ],
      {}
    );

    // Seeder untuk Tabel Register
    await queryInterface.bulkInsert(
      "Register",
      [
        {
          user_id: 1,
          timestamp: new Date(),
        },
      ],
      {}
    );

    // Seeder untuk Tabel Logout
    await queryInterface.bulkInsert(
      "Logout",
      [
        {
          user_id: 1,
          timestamp: new Date(),
        },
      ],
      {}
    );

    // Seeder untuk Tabel Kategori
    await queryInterface.bulkInsert(
      "Kategori",
      [
        {
          nama: "Teknologi",
        },
        {
          nama: "Olahraga",
        },
      ],
      {}
    );

    // Seeder untuk Tabel Proyek
    await queryInterface.bulkInsert(
      "Proyek",
      [
        {
          nama: "Proyek A",
          deskripsi: "Deskripsi Proyek A",
          kategori_id: 1,
          goal: 10000,
          user_id: 1,
        },
        {
          nama: "Proyek B",
          deskripsi: "Deskripsi Proyek B",
          kategori_id: 2,
          goal: 15000,
          user_id: 2,
        },
      ],
      {}
    );

    // Seeder untuk Tabel Komentar
    await queryInterface.bulkInsert(
      "Komentar",
      [
        {
          user_id: 1,
          proyek_id: 1,
          isi: "Komentar Proyek A",
        },
      ],
      {}
    );

    // Seeder untuk Tabel Pembayaran
    await queryInterface.bulkInsert(
      "Pembayaran",
      [
        {
          user_id: 1,
          proyek_id: 1,
          jumlah_pembayaran: 5000,
          tanggal_pembayaran: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    // Jika diperlukan, tambahkan logika untuk rollback
    // ...

    // Hapus semua data dari tabel Users
    await queryInterface.bulkDelete("Users", null, {});

    // Hapus semua data dari tabel Admins
    await queryInterface.bulkDelete("Admin", null, {});

    // Hapus semua data dari tabel Logins
    await queryInterface.bulkDelete("Login", null, {});

    // Hapus semua data dari tabel Registers
    await queryInterface.bulkDelete("Register", null, {});

    // Hapus semua data dari tabel Logouts
    await queryInterface.bulkDelete("Logout", null, {});

    // Hapus semua data dari tabel Komentars
    await queryInterface.bulkDelete("Komentar", null, {});

    // Hapus semua data dari tabel Kategoris
    await queryInterface.bulkDelete("Kategori", null, {});

    // Hapus semua data dari tabel Proyeks
    await queryInterface.bulkDelete("Proyek", null, {});

    // Hapus semua data dari tabel Pembayarans
    await queryInterface.bulkDelete("Pembayaran", null, {});
  },
};
