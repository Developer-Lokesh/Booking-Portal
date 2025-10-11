const Vehicle = require("../../models/vehicle");

const vehicleRegistrationDB = async ({driver,numberPlate, vehicleName, RC,  color, model, capacity}) => {
    const registration = await Vehicle.findOne({RC});
    if(registration){
        return {
            success:false,
            error:"Vehicle already exist with this RC"
        };
    }
    const vehicleReg = new Vehicle({driver, numberPlate, vehicleName, RC,  color, model, capacity});
    return vehicleReg.save();
};

module.exports = {vehicleRegistrationDB};