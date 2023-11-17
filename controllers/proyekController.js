const { Proyek } = require("../models");

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

const createProyek = async (req, res) => {
  try {
    const proyek = await Proyek.create(req.body);
    res.status(201).json(proyek);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProyek = async (req, res) => {
  try {
    const proyek = await Proyek.findByPk(req.params.id);
    if (proyek) {
      await proyek.update(req.body);
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
  getAllProyek,
  getProyekById,
  createProyek,
  updateProyek,
  deleteProyek,
};
