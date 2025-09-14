const express = require("express");
const { getride, bookride, cancelRide } = require("../../controllers/user/ride.controller");

const router = express.Router();

router.get("/getride", getride);
router.post("/bookride", bookride);
router.put("/cancelRide/:Id", cancelRide);

module.exports = router;