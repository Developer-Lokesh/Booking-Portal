const Driver = require("../models/driver");

const loginDB = async ({email, licenseNumber}) => {
    return  await Driver.findOne({email, licenseNumber}).select("-__v");
    
};

const registerDB = async ({name, email, password, phone, licenseNumber,role, driverImgURL}) => {
    const driverfind = await Driver.findOne({email});
    if(driverfind){
        return {
            success:false,
            error:"Driver is already exist"
        }
    }
    let driverdata = new Driver({name, email, password, licenseNumber, phone,role, driverImgURL});
    return await driverdata.save();
};

module.exports = {loginDB,registerDB}