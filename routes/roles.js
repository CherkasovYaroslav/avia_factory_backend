const express = require("express");
const router = express.Router();
const rolesController = require("../controllers/roleController");

router.get("/", rolesController.getRoles);
router.get("/:id", rolesController.getRole);
router.post("/", rolesController.createRole);
router.delete("/:id", rolesController.deleteRole);

module.exports = router;
