const { getPendingDriversDB, approveDriverDB, rejectDriverDB } = require("../../services/admin/verification.service");

const getPendingDrivers = async (req, res) => {
    try {
        const drivers = await getPendingDriversDB();
        if (!drivers) {
            return res.json({
                success: false,
                message: "Drivers not found"
            });
        }
        return res.json({
            success: true,
            message: "Drivers get successfully",
            data: drivers
        })
    } catch (error) {
        console.log("Error in admin verification controller", error);
        return res.json({
            success: false,
            message: "Something went wrong"
        })
    }
};

const approveDriver = async (req, res) => {
    const { Id } = req.params;
    if (!Id) {
        return res.json({
            success: false,
            message: "Driver not found"
        });
    }
    try {
        const driver = await approveDriverDB({ Id });
        if (!driver) {
            return res.json({
                success: false,
                message: "This driver is not found"
            });
        }
        return res.json({
            success: true,
            message: "Driver approved successfully",
            data: driver
        });
    } catch (error) {
        console.log("Erron in admin verification controller", error);
        return res.json({
            success: false,
            message: "Something went wrong"
        });
    }
};

const rejectDriver = async (req, res) => {
    const {Id} = req.params;
    if(!Id){
        return res.json({
            success:false,
            message:"Driver not found"
        });
    }
    try {
        const driver = await rejectDriverDB({Id});
        if(!driver){
            return res.json({
                success:false,
                message:"This driver not found"
            });
        }
        return res.json({
            success:false,
            message:"Driver rejected!",
            data:driver
        })
    } catch (error) {
        console.log("Erron in admin verification", error);
        return res.json({
            success:false,
            message:error.message || "Something went wrong"
        })
    }
};

module.exports = { getPendingDrivers, approveDriver, rejectDriver };
