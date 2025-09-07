const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    driver:{type:mongoose.Schema.Types.ObjectId, ref:"Driver"},
    pickupLocation:{type:String, long:Number, lat:Number},
    dropLocation:{type:String, long:Number, lat:Number},
    Status:{type:String, enum:["requested", "pending", "ongoing", "completed", "cancelled"], default:"requested"},
    price:{type:Number},
    distance:{type:Number},
    duration:{type:Number},
    paymentStatus:{type:String, enum:["pending", "paid", "failed"], default:"pending"},
    otp:{type:String}
},
{timestamps:true});

const Ride = mongoose.model("Ride", rideSchema);

module.exports = Ride;