const express = require("express");
const router = express.Router();
const sectionController = require("../controllers/sectionController");

router.get("/", sectionController.getSections);
router.get("/:id", sectionController.getSection);
router.get("/:id/suppliers", sectionController.getSectionSuppliers);
router.post("/", sectionController.createSection);
router.patch("/:id", sectionController.updateSection);
router.delete("/:id", sectionController.deleteSection);

module.exports = router;