const express = require("express");

const driverAuth = require("./auth.route");
const permitRoute = require("./permit.route");
const vehicleRoute = require("./vehicle.route")

const router = express.Router();

router.use("/driverAuth", driverAuth);
router.use("/permitcheck", permitRoute);
router.use("/vehicleVerification", vehicleRoute);

module.exports = router;