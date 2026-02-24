const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getProducts);
router.get("/:Id", productController.getProduct);
router.post("/", productController.createProduct);
router.put("/:Id", productController.updateProduct);
router.delete("/:Id", productController.deleteProduct);

module.exports = router;