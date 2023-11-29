const controller = require("../controllers/profileController");
const express = require("express");
const router = express.Router();

router.get("/", controller.getProfiles);
router.get("/:id", controller.getProfileById);
router.post("/", controller.addProfile);
router.delete("/:id", controller.deleteProfile);
router.put("/:id", controller.editProfile);

module.exports = router;
