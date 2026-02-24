const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/", orderController.getOrders);
router.get("/:Id", orderController.getOrder);
router.post("/", orderController.createOrder);
router.put("/:Id", orderController.updateOrder);
router.delete("/:Id", orderController.deleteOrder);

module.exports = router;