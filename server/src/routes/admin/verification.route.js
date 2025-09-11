const express = require("express");
const { getPendingDrivers, approveDriver, rejectDriver, approvedDrivers, rejectedDrivers } = require("../../controllers/admin/verification.controller");



const router = express.Router();

router.get("/pending-drivers", getPendingDrivers);
router.get("/approve-drivers", approvedDrivers);
router.get("/rejected-drivers", rejectedDrivers);

router.put("/approve-driver/:Id", approveDriver);
router.put("/reject-driver/:Id",rejectDriver);

module.exports = router;