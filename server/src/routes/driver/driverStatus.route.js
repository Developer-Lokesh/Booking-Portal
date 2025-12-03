const express = require("express");
const { onlineStatus, offlineStatus } = require("../../controllers/driver/driverStatus.controller");
const router = express.Router();

router.put("/online/:id", onlineStatus);
router.put("/offline/:id", offlineStatus);

module.exports = router