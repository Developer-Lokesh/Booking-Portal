const Ride = require("../../models/ride");

const getrideDB = async () => {
    return await Ride.find({status:"completed"});
};

const bookrideDB = async ({ user, driver, pickupLocation, dropLocation, price, distance, duration, opt }) => {
    const userRide = new Ride({ user, driver, pickupLocation, dropLocation, price, distance, duration, opt });
    return userRide.save();
};

const updateRideLocationDB = async (Id, location) => {
    return await Ride.findByIdAndUpdate(Id, location, {new:true});
};

const cancelRideDB = async (Id) => {
    return await Ride.findByIdAndDelete(Id, {status:"cancelled"}, {new:true});
};


module.exports = {getrideDB, bookrideDB, updateRideLocationDB, cancelRideDB};