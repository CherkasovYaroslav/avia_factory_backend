const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");

router.get("/", clientController.getClients);
router.get("/:Id", clientController.getClient);
router.post("/", clientController.createClient);
router.put("/:Id", clientController.updateClient);
router.delete("/:Id", clientController.deleteClient);

module.exports = router;