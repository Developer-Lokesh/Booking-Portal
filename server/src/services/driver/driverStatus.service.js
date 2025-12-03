const Driver = require("../../models/driver")

const onlineDB = async (id) => {
    const goOnline =  await Driver.findByIdAndUpdate(id);
    goOnline.status = "online"
    await goOnline.save();
    return goOnline;
};

const offlineDB = async (id) => {
    const goOffline = await Driver.findByIdAndUpdate(id);
    goOffline.status = "offline";
    await goOffline.save();
    return goOffline;
}

module.exports = {onlineDB, offlineDB}