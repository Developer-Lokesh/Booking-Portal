const express = require("express");
const { getusers, getdrivers } = require("../../controllers/admin/user.controller");

const router = express.Router();

router.get("/getusers", getusers);
router.get("/getdrivers", getdrivers);

module.exports = router;