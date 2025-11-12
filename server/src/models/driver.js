const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true, unique: true },
    licenseNumber: { type: String, required: true, unique: true },
    driverImgURL:{type:String, required:true},
    // driverImg:{type:String, required:true},
    // public_id:{type:String, required:true},
    role:{type:String, enum:["driver"]},
    isAvailable: { type: Boolean, default: true },
    verificationStatus: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
    isVerified: { type: Boolean, default: false },
    status: { type: String, enum: ["online", "busy", "offline"], default: "offline" },
   
    // rating:{type:Number, default:0},
    // totalRide:{type:Number, default:0},
    // vehicle:{type:mongoose.Schema.Types.ObjectId, ref:"Vehicle", required:true}
},
    { timestamps: true },
);

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;