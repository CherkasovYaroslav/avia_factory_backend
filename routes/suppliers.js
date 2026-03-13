const express = require("express");
const router = express.Router();
const suppliersController = require("../controllers/supplierController");

router.get("/", suppliersController.getSuppliers);
router.get("/:id", suppliersController.getSupplier);
router.post("/", suppliersController.createSupplier);
router.patch("/:id", suppliersController.updateSupplier);
router.delete("/:id", suppliersController.deleteSupplier);
router.get("/:id/sections", suppliersController.getSupplierSectionsAndDetails);

module.exports = router;