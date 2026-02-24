const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

router.get("/", employeeController.getEmployees);
router.get("/:Id", employeeController.getEmployee);
router.post("/", employeeController.createEmployee);
router.put("/:Id", employeeController.updateEmployee);
router.delete("/:Id", employeeController.deleteEmployee);

module.exports = router;