const mongoose = require("mongoose");

const permitSchema = new mongoose.Schema({
    driver: { type: mongoose.Schema.Types.ObjectId, ref: "Driver", required: true },
    vehicleInfo: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle", required: true },
    permitImg: { type: String, required: true },
    registrationNumber: { type: String, required: true, unique: true },
    validityDate: { type: Date, required: true },
    RC: { type: String, unique: true, required: true },
});

const Permit = mongoose.model("Permit", permitSchema);

module.exports = Permit;