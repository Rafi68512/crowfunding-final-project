const { Sequelize, DataTypes } = require("sequelize");

const seq = new Sequelize("donasi", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

const User = seq.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

seq.sync();

const getProfiles = async (req, res) => {
  try {
    const profiles = await User.findAll({
      order: [
        ["id", "ASC"], // 'ASC' untuk urutan menaik, 'DESC' untuk urutan menurun
      ],
    });
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getProfileById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);

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
  const { username, email, password } = req.body;
  console.log(nama, username, email, password);

  const profile = await User.create({
    nama,
    username,
    email,
    password,
  });
  res.send({
    data: profile,
    message: "Terkirim",
  });
};
const deleteProfile = async (req, res) => {
  try {
    const userId = req.params.id;

    // Use Sequelize's destroy method to delete a user by ID
    const rowsDeleted = await User.destroy({
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
    const userId = await req.params.id;
    const { username, email, password } = req.body;
    const [updatedUser] = await seq.query(
      `
        UPDATE users
        SET username = '${username}', email = '${email}', password = '${password}'
        WHERE id = ${userId}
        RETURNING *
      `,
      { type: seq.QueryTypes.UPDATE }
    );

    if (!updatedUser.length) {
      console.log("User not found.");
    } else {
      console.log("User updated:", updatedUser[0]);
    }
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

module.exports = {
  getProfiles,
  getProfileById,
  addProfile,
  deleteProfile,
  editProfile,
};
