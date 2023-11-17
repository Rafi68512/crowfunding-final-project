const express = require("express");
const transaksiController = require("../controllers/transaksiController");

const router = express.Router();

router.post("/process-transaction", transaksiController.processTransaction);

module.exports = router;
