const express = require("express");
const router = express.Router();
const planeController = require("../controllers/planeController");

router.get("/", planeController.getPlanes);
router.get("/:Id", planeController.getPlane);
router.post("/", planeController.createPlane);
router.put("/:Id", planeController.updatePlane);
router.delete("/:Id", planeController.deletePlane);

module.exports = router;