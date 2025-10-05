const express = require("express");

const handleUser = require("./user.route");
const verification = require("./verification.route");
const { getMe } = require("../../controllers/admin/me.controller");

const router = express.Router();

router.use("/me", getMe)

router.use("/handleUser", handleUser);
router.use("/verification", verification);

module.exports = router