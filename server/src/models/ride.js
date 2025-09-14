const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    address:{type:String},
    long:{type:Number, required:true},
    lat:{type:Number, required:true}
});

const rideSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, ref:"User", required:true},
    driver:{type:mongoose.Schema.Types.ObjectId, ref:"Driver", required:false},
    pickupLocation:locationSchema,
    dropLocation:locationSchema,
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