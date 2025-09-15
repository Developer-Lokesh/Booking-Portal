const express = require("express");
const { getusers } = require("../../controllers/admin/user.controller");

const router = express.Router();

router.get("/getusers", getusers);
// router.get("/drivers", getDrivers);

module.exports = router;