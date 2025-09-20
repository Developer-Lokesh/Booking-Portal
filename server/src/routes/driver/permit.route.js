const express = require("express");
const { permitInfo } = require("../../controllers/driver/permit.controller");

const router = express.Router();

// router.get("/driverInfo", driverInfo);
router.post("/permit", permitInfo);

module.exports = router;
