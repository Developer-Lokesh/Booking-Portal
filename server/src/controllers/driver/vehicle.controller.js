const { vehicleRegistrationDB } = require("../../services/driver/vehicle.service");

const vehicleRegistration = async (req, res) => {
    const {driver, numberPlate, vehicleType, RC,  color, model, capacity} = req.body;
    if(!numberPlate|| !vehicleType || !RC || !color || !model || !capacity){
        return res.json({
            success:false,
            message:"All fields required",
            require:["numberPlate", "vehicleType", "RC", "color", "model", "capacity"]
        });
    }
    try {
        const vehicleData = await vehicleRegistrationDB({driver,numberPlate, vehicleType, RC, color, model, capacity});
        console.log(vehicleData)
        if(!vehicleData){
            return res.json({
                success:false,
                message:"Something went wrong"
            });
        }

        await vehicleData.populate("driver");

        return res.json({
            success:true,
            message:"Vehicle registered successfully",
            data: vehicleData
        });
        
    } catch (error) {
        console.log("Error in vehicle controller", error);
        return res.json({
            success:false,
            message:"Vehicle registration failed!"
        });
    }
};

module.exports = {vehicleRegistration};