const express = require("express");

const handleUser = require("./user.route");
const verification = require("./verification.route")

const router = express.Router();

router.use("/handleUser", handleUser);
router.use("/verification", verification);

module.exports = router