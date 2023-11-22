-- Data seeding untuk tabel "users"
INSERT INTO users (username, email, password) VALUES
  ('user1', 'user1@example.com', 'password1'),
  ('user2', 'user2@example.com', 'password2'),
  ('user3', 'user3@example.com', 'password3');

-- Data seeding untuk tabel "admin"
INSERT INTO admin (user_id, username, email, password) VALUES
  (1, 'admin1', 'admin1@example.com', 'adminpassword1'),
  (2, 'admin2', 'admin2@example.com', 'adminpassword2');

-- Data seeding untuk tabel "login"
INSERT INTO login (user_id, timestamp) VALUES
  (1, '2023-01-01'),
  (2, '2023-01-02');

-- Data seeding untuk tabel "register"
INSERT INTO register (user_id, timestamp) VALUES
  (1, '2023-01-03'),
  (2, '2023-01-04');

-- Data seeding untuk tabel "logout"
INSERT INTO logout (user_id, timestamp) VALUES
  (1, '2023-01-05'),
  (2, '2023-01-06');

-- Data seeding untuk tabel "anggota"
INSERT INTO anggota (user_id, nama) VALUES
  (1, 'Anggota 1'),
  (2, 'Anggota 2');

-- Data seeding untuk tabel "komentar"
INSERT INTO komentar (user_id, proyek_id, isi) VALUES
  (1, 1, 'Komentar proyek 1'),
  (2, 1, 'Komentar proyek 1'),
  (1, 2, 'Komentar proyek 2');

-- Data seeding untuk tabel "kategori"
INSERT INTO kategori (nama) VALUES
  ('Kategori 1'),
  ('Kategori 2');

-- Data seeding untuk tabel "proyek" dengan kolom "goal"
INSERT INTO proyek (nama, deskripsi, kategori_id, goal) VALUES
  ('Proyek 1', 'Deskripsi proyek 1', 1, 20000000.00),
  ('Proyek 2', 'Deskripsi proyek 2', 2, 15000000.00);

-- Data seeding untuk tabel "pembayaran"
INSERT INTO pembayaran (user_id, proyek_id, jumlah_pembayaran, tanggal_pembayaran) VALUES
  (1, 1, 1000.00, '2023-01-10'),
  (2, 1, 2000.00, '2023-01-11');
