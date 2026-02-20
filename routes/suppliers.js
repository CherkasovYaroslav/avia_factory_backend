const express = require("express");
const router = express.Router();
const suppliersController = require("../controllers/supplierController");

router.get("/", suppliersController.getSuppliers);
router.get("/:Id", suppliersController.getSupplier);
router.post("/", suppliersController.createSupplier);
router.put("/:Id", suppliersController.updateSupplier);
router.delete("/:Id", suppliersController.deleteSupplier);

module.exports = router;