const express = require("express");
const router = express.Router();
const planeController = require("../controllers/planeController");

router.get("/", planeController.getPlanes);
router.get("/:id", planeController.getPlane);
router.post("/", planeController.createPlane);
router.patch("/:id", planeController.updatePlane);
router.delete("/:id", planeController.deletePlane);

module.exports = router;