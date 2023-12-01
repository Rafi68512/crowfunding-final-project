// routes/proyekRoutes.js

const express = require("express");
const router = express.Router();
const proyekController = require("../controllers/proyekController");

router.use(proyekController.authenticateTokenMiddleware);

router.get("/proyek", proyekController.getAllProyek);
router.get("/proyek/:id", proyekController.getProyekById);

router.post(
  "/proyek",
  proyekController.upload.single("image"),
  proyekController.createProyek
);
router.put(
  "/proyek/:id",
  proyekController.upload.single("image"),
  proyekController.updateProyek
);
router.delete("/proyek/:id", proyekController.deleteProyek);

module.exports = router;
