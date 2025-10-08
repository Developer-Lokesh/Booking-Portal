const express = require("express");
const { getPendingDrivers, approveDriver, rejectDriver, approvedDrivers, rejectedDrivers, driverProfile } = require("../../controllers/admin/verification.controller");



const router = express.Router();

router.get("/pending-drivers", getPendingDrivers);
router.get("/approve-drivers", approvedDrivers);
router.get("/rejected-drivers", rejectedDrivers);
router.get("/profile/:id", driverProfile);

router.put("/approve-driver/:Id", approveDriver);
router.put("/reject-driver/:Id",rejectDriver);

module.exports = router;