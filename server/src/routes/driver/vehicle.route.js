const express = require("express");
const { vehicleRegistration } = require("../../controllers/driver/vehicle.controller");
const router = express.Router();

router.post("/registration", vehicleRegistration);

module.exports = router;