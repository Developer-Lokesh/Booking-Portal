const Driver = require("../../models/driver");

const getPendingDriversDB = async () => {
    return await Driver.find({verificationStatus:"pending"});
};

const approveDriverDB = async (Id) => {
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

module.exports = {getPendingDriversDB, approveDriverDB, rejectDriverDB};