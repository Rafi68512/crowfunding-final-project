-- INSERT INTO public."Users"(username, email, password)
-- 	VALUES ('user3', 'sasas','sasssa');
-- -- -- Data seeding untuk tabel "users"
-- auto_increment = 1
INSERT INTO public."Users" (username, email, password) VALUES
  ('user2', 'user1@example.com', 'password1'),
  ('user3', 'user3@example.com', 'password3'),
  ('user4', 'user4@example.com', 'password4');
-- Data seeding untuk tabel "admin"
INSERT INTO public."Admin" (user_id, username, email, password) VALUES
  (1, 'admin1', 'admin1@example.com', 'adminpassword1'),
  (1, 'admin2', 'admin1@example.com', 'adminpassword1');

-- -- Data seeding untuk tabel "login"
INSERT INTO public."Login" (user_id, timestamp) VALUES
  (1, '2023-01-01'),
  (1, '2023-01-01');
-- -- Data seeding untuk tabel "register"
INSERT INTO public."Register" (user_id, timestamp) VALUES
  (1, '2023-01-03'),
  (1, '2023-01-03');

-- -- Data seeding untuk tabel "logout"
INSERT INTO public."Logout" ( user_id, timestamp) VALUES
  (1, '2023-01-05'),
  (1, '2023-01-05');

-- -- Data seeding untuk tabel "anggota"
INSERT INTO public."Anggota" (user_id, nama) VALUES
  (1, 'Anggota 1'),
  (1, 'Anggota 1');

-- -- Data seeding untuk tabel "kategori"
INSERT INTO public."Kategori" (nama) VALUES
  ('Kategori 2'),
  ('Kategori 3');

-- -- Data seeding untuk tabel "proyek" dengan kolom "goal"
INSERT INTO public."Proyek" (nama, deskripsi, kategori_id, goal,user_id) VALUES
  ('Proyek 2', 'Deskripsi proyek 2', 1, 20000000.00,1),
  ('Proyek 2', 'Deskripsi proyek 2', 1, 20000000.00,1);

-- -- Data seeding untuk tabel "komentar"
INSERT INTO public."Komentar" ( user_id, proyek_id, isi) VALUES
  (1, 1, 'Komentar proyek 1'),
  (1, 1, 'Komentar proyek 1');

-- -- Data seeding untuk tabel "pembayaran"
INSERT INTO public."Pembayaran" (user_id, proyek_id, jumlah_pembayaran, tanggal_pembayaran) VALUES
  (1, 1, 1000.00, '2023-01-10'),
  (1, 1, 1000.00, '2023-01-10');

