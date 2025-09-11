const express = require("express");
const { getPendingDrivers, approveDriver, rejectDriver } = require("../../controllers/admin/verification.controller");



const router = express.Router();

router.get("pending-drivers", getPendingDrivers);
router.put("/aprove-driver/:Id", approveDriver);
router.put("/reject-driver/:Id",rejectDriver);

module.exports = router;