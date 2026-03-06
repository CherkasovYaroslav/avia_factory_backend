const express = require("express");
const router = express.Router();
const suppliersController = require("../controllers/supplierController");

router.get("/", suppliersController.getSuppliers);
router.get("/:id", suppliersController.getSupplier);
router.post("/", suppliersController.createSupplier);
router.put("/:id", suppliersController.updateSupplier);
router.delete("/:id", suppliersController.deleteSupplier);

module.exports = router;