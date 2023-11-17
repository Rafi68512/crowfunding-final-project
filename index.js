const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const proyekRoutes = require("./routes/proyek");
const transaksiRoutes = require("./routes/transaksiRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", proyekRoutes);
app.use("/api", transaksiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
