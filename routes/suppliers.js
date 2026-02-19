const express = require("express");
const router = express.Router();
const suppliersController = require("../controllers/supplierController");

router.get("/",suppliersController.getSuppliers);
router.get("/:Id",suppliersController.getSupplier);

module.exports = router;