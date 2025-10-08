const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    driver:{type:mongoose.Schema.Types.ObjectId, ref:"Driver", required:true},
    numberPlate:{type:String, required:true, unique:true},
    RC:{type:String, required:true, unique:true},
    vehicleType:{type:String, enum:["Sedan", "SUV","Bike"], default:"Bike"},
    color:{type:String, required:true},
    model:{type:String, required:true},
    capacity:{type:Number, default:1},
    // permit:{type:mongoose.Schema.Types.ObjectId, ref:"Permit"}
},
{timestamps:true}
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;