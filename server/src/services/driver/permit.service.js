const Permit = require("../../models/permit");

const permitInfoDB = async ({vehicleInfo, permitImg, registrationNumber, validityDate, RC}) => {
    const registrationCheck = await Permit.findOne({registrationNumber});
    if(registrationCheck){
        return {
            success:false,
            error:"This permit is already is already exist"
        };
    }
    const permitData = new Permit({vehicleInfo, permitImg, registrationNumber, validityDate, RC});
    return await permitData.save();
};

module.exports = {permitInfoDB}