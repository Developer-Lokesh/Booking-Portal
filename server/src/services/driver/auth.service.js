const Driver = require("../../models/driver");

const loginDB = async ({email}) => {
    // console.log(email,"emial")
    const store =  await Driver.findOne({email});
    return store;
    // console.log(store , "this is stroe")
};

const registerDB = async ({name, email, password, phone, licenseNumber}) => {
    const driverfind = await Driver.findOne({email});
    if(driverfind){
        return {
            success:false,
            message:"Driver already exist with this email"
        };
    }
    let driverdata = new Driver({name, email, password, licenseNumber, phone});
    return await driverdata.save();
};

module.exports = {loginDB,registerDB}