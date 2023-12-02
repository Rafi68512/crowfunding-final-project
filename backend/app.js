// app.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes.js");
const proyekRoutes = require("./routes/proyekRoutes.js");
const paymentRoutes = require("./routes/paymentRoutes.js");
const profileRoute = require("./routes/profileRoute.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api", proyekRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/profile", profileRoute);

module.exports = app;
