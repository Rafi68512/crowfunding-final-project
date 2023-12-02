// controllers/proyekController.js

const { Proyek, Pembayaran } = require("../models");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const multer = require("multer");
const path = require("path");

const authenticateTokenMiddleware = async (req, res, next) => {
  const token =
    req.header("Authorization") &&
    req.header("Authorization").replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.userId);
    if (!user) return res.status(401).json({ message: "Unauthorized" });

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

// Set up multer middleware to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../uploads/");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, Date.now() + "-" + fileName);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }, // 10MB limit
});

const getAllProyek = async (req, res) => {
  try {
    const proyek = await Proyek.findAll();
    res.json(proyek);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProyekById = async (req, res) => {
  try {
    const proyek = await Proyek.findByPk(req.params.id);
    res.json(proyek);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTotalTerkumpul = async (req, res) => {
  try {
    const proyekId = req.params.id;
    const totalTerkumpul = await Pembayaran.sum("jumlah_pembayaran", {
      where: { proyek_id: proyekId },
    });

    res.status(200).json({ totalTerkumpul });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProyek = async (req, res) => {
  try {
    const proyek = await Proyek.create({
      nama: req.body.nama,
      deskripsi: req.body.deskripsi,
      goal: req.body.goal,
      kategori_id: req.body.kategori_id,
      user_id: req.user.id,
      image: req.file.filename,
    });

    res.status(201).json(proyek);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProyek = async (req, res) => {
  try {
    const proyek = await Proyek.findByPk(req.params.id);
    if (proyek) {
      await proyek.update({
        nama: req.body.nama,
        deskripsi: req.body.deskripsi,
        goal: req.body.goal,
        kategori_id: req.body.kategori_id,
      });
      res.json(proyek);
    } else {
      res.status(404).json({ error: "Proyek not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProyek = async (req, res) => {
  try {
    const proyek = await Proyek.findByPk(req.params.id);
    if (proyek) {
      await proyek.destroy();
      res.json({ message: "Proyek deleted successfully" });
    } else {
      res.status(404).json({ error: "Proyek not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  authenticateTokenMiddleware,
  getAllProyek,
  getProyekById,
  createProyek,
  updateProyek,
  deleteProyek,
  upload,
  getTotalTerkumpul,
};
