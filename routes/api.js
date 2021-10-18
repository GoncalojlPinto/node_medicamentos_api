const express = require("express")
const medicineController = require("../controllers/medicineController")
const router = express.Router()

// Mock API - medicamentos
router.get("/medicines", medicineController.index)
router.get("/medicines/:id", medicineController.show)
router.post("/medicines", medicineController.create)
router.put("/medicines/:id", medicineController.update)
router.delete("/medicines/:id", medicineController.destroy)

module.exports = router