const { vehicleRegistrationDB } = require("../../services/driver/vehicle.service");

const vehicleRegistration = async (req, res) => {
    const driver = req.driver.id;
    console.log(driver.id)
    const { numberPlate, vehicleName, RC,  color, model, capacity, vehicleImgURL} = req.body;
    if(!numberPlate|| !vehicleName || !RC || !color || !model || !capacity || !vehicleImgURL){
        return res.json({
            success:false,
            error:"All fields required",
            require:["numberPlate", "vehicleType", "RC", "color", "model", "capacity0", "vehicleImgURL"]
        });
    }
    try {
        const vehicleData = await vehicleRegistrationDB({driver,numberPlate, vehicleName, RC, color, model, capacity, vehicleImgURL});
        // console.log(vehicleData)
        if(vehicleData && vehicleData.success === false){
            return res.json({
                success:false,
                error:vehicleData.error
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