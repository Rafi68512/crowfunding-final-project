// controllers/authController.js

const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const { password: passwordDB, ...user } = await Users.create({
      username,
      email,
      password: hashedPassword,
    });
    res.json({ user });
  } catch (err) {
    res.status(400).json({ message: "User already exists" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Invalid credentials" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
