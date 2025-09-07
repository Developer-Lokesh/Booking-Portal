const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    driver:{type:mongoose.Schema.Types.ObjectId, ref:"Driver", required:true},
    NumberPlate:{type:String, required:true, unique:true},
    vehicleType:{type:String, enum:["Sedan", "SUV","Bike"], default:"Bike"},
    color:{type:String, required:true},
    model:{type:String, required:true},
    capacity:{type:Number, default:1}
},
{versionkey:false}
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;