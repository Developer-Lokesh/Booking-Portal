const Driver = require("../../models/driver");
const Vehicle = require("../../models/vehicle");

const getPendingDriversDB = async () => {
    return await Driver.find({verificationStatus:"pending"});
};

const approveDriversDB = async () => {
    return await Driver.find({verificationStatus:"approved"});
};

const rejectedDriversDB = async () => {
    return await Driver.find({verificationStatus:"rejected"})
}

const driverProfileDB = async (id) => {
    console.log(id, "in serveri")
    const info = await Driver.findById(id).populate("Vehicle").populate("permit");
    console.log(info)
    return info;
}

const approveDriverDB = async (Id) => {
    // console.log(Id, "service");
    const driver = await Driver.findById(Id);
    if(!driver){
        console.log("Erron in admin verification service");
       throw new Error("Driver not found")
    }
    driver.verificationStatus = "approved";
    driver.isVerified = true;
    await driver.save();
    return driver;
}; 

const rejectDriverDB = async (Id) => {
    const driver = await Driver.findById(Id);
    if(!driver){
        console.log("Erron in admin verification service");
       throw new Error("Driver not found")
    }
    driver.verificationStatus = "rejected";
    driver.isVerified = false;
    await driver.save();
    return driver;
}; 

module.exports = {getPendingDriversDB, approveDriverDB, rejectDriverDB, approveDriversDB, rejectedDriversDB, driverProfileDB};