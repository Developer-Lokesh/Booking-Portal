const express = require("express");

const rideRoute = require("./ride.route");
// const userAuth = require("./user.routes");

const router = express.Router();

router.use("/rideBooking", rideRoute);
// router.use("/userAuth", userAuth);

module.exports = router;