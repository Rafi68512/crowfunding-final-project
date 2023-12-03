// profileController.js
const { Users } = require("../models");
const bcrypt = require("bcrypt");

const getProfiles = async (req, res) => {
  try {
    const profiles = await Users.findAll({
      order: [["id", "ASC"]],
    });
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProfileById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await Users.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error getting user by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addProfile = async (req, res) => {
  const { nama, email, password } = req.body;
  console.log(nama, email, password);

  try {
    const profile = await Users.create({
      nama: req.body.nama,
      email: req.body.email,
      password: req.body.password,
    });
    res.send({
      data: profile,
      message: "Terkirim",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const rowsDeleted = await Users.destroy({
      where: {
        id: userId,
      },
    });

    if (rowsDeleted === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const editProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const { username, email, password, nama } = req.body;

    const user = await Users.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    let updatedUserData = {};

    if (username) {
      updatedUserData.username = username;
    }

    if (email) {
      updatedUserData.email = email;
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedUserData.password = hashedPassword;
    }

    if (nama) {
      updatedUserData.nama = nama;
    }

    const [updatedRowsCount, [updatedUser]] = await Users.update(
      updatedUserData,
      {
        where: { id: userId },
        returning: true,
      }
    );

    if (!updatedUser) {
      console.log("User not found.");
      return res.status(404).json({ error: "User not found" });
    }

    console.log("User updated:", updatedUser);
    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProfiles,
  getProfileById,
  addProfile,
  deleteProfile,
  editProfile,
};
