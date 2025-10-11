const { vehicleRegistrationDB } = require("../../services/driver/vehicle.service");

const vehicleRegistration = async (req, res) => {
    const driver = req.user.id;
    console.log(driver.id)
    const { numberPlate, vehicleName, RC,  color, model, capacity} = req.body;
    if(!numberPlate|| !vehicleName || !RC || !color || !model || !capacity){
        return res.json({
            success:false,
            error:"All fields required",
            require:["numberPlate", "vehicleType", "RC", "color", "model", "capacity"]
        });
    }
    try {
        const vehicleData = await vehicleRegistrationDB({driver,numberPlate, vehicleName, RC, color, model, capacity});
        // console.log(vehicleData)
        if(!vehicleData){
            return res.json({
                success:false,
                error:"Something went wrong"
            });
        }

        // await vehicleData.populate("driver");
        // await vehicleData.populate({
        //     select:"Driver",
        //     path:"name email"
        // });
        

        return res.json({
            success:true,
            message:"Vehicle registered successfully",
            data: vehicleData
        });
        
    } catch (error) {
        console.log("Error in vehicle controller", error);
        if(error.code === 11000){
            return res.json({
                success:false,
                error:"This vehicle is already asign to another driver"
            })
        }
        return res.json({
            success:false,
            error:"Vehicle registration failed!"
        });
    }
};

module.exports = {vehicleRegistration};