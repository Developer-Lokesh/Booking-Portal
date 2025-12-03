const express = require("express");

// const driverAuth = require("./auth.route");
const permitRoute = require("./permit.route");
const vehicleRoute = require("./vehicle.route");
const driverStatus = require("./driverStatus.route")

const router = express.Router();

// router.use("/driverAuth", driverAuth);
router.use("/permitcheck", permitRoute);
router.use("/vehicleVerification", vehicleRoute);
router.use("/driverStatus", driverStatus)

module.exports = router;