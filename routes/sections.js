const express = require("express");
const router = express.Router();
const sectionController = require("../controllers/sectionController");

router.get("/", sectionController.getSections);
router.get("/:Id", sectionController.getSection);
router.post("/", sectionController.createSection);
router.put("/:Id", sectionController.updateSection);
router.delete("/:Id", sectionController.deleteSection);

module.exports = router;