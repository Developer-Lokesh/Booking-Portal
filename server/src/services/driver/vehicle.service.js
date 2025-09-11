const Vehicle = require("../../models/vehicle");

const vehicleRegistrationDB = async ({driver,numberPlate, vehicleType, RC,  color, model, capacity}) => {
    const registration = await Vehicle.findOne({RC});
    if(registration){
        return {
            success:false,
            message:"Vehicle already exist with this RC"
        };
    }
    const vehicleReg = new Vehicle({driver, numberPlate, vehicleType, RC,  color, model, capacity});
    return vehicleReg.save();
};

module.exports = {vehicleRegistrationDB};