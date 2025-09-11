const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true, unique: true },
    licenseNumber: { type: String, required: true, unique: true },
    isAvailable: { type: Boolean, default: true },
    verificationStatus: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
    isVerified: { type: Boolean, default: false },
    status: { type: String, enum: ["online", "busy", "offline"], default: "offline" },
    location: {
        type: { type: String, enum: ["point"], default: "point" },
        coordinate: { type: Number, default: [0, 0], required:true }
    }
    // rating:{type:Number, default:0},
    // totalRide:{type:Number, default:0},
    // vehicle:{type:mongoose.Schema.Types.ObjectId, ref:"Vehicle"}
},
    { timestamps: true },
);

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;