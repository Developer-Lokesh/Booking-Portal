const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
    ride:{type:mongoose.Schema.Types.ObjectId, ref:"Ride", required:true},
    user:{type:mongoose.Schema.Types.ObjectId, ref:"User", required:true},
    driver:{type:mongoose.Schema.Types.ObjectId, ref:"Driver", required:true},
    rating:{type:Number, min:1, max:5},
    review:{type:String}
},
{timestamps:true}
);

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;