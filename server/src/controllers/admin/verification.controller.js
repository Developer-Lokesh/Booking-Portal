const { getPendingDriversDB, approveDriverDB, rejectDriverDB, approveDriversDB, rejectedDriversDB, driverProfileDB } = require("../../services/admin/verification.service");

const getPendingDrivers = async (req, res) => {
    try {
        const drivers = await getPendingDriversDB();
        if (!drivers) {
            return res.json({
                success: false,
                error: "Drivers not found"
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
            error: "Something went wrong"
        })
    }
};

const approvedDrivers = async (req, res) => {
    try {
        const drivers = await approveDriversDB();
        if (!drivers) {
            return res.json({
                success: false,
                error: "Approved drivers not found"
            });
        }
        return res.json({
            success: true,
            message: "All approved drivers",
            data: drivers
        });
    } catch (error) {
        console.log("Error in Verification controller" || "Something went wrong");
        return res.json({
            success: false,
            error: "Something went wrong"
        });
    }
};

const driverProfile = async (req, res) => {
    const {id} = req.params;
    // console.log(id)

    try {
        const profile = await driverProfileDB(id);
        // console.log(profile)
        if(!profile){
            return res.json({
                success:false,
                error:"Something went wrong"
            });
        }
        return res.json({
            success:true,
            message:"Driver Information fetched successfully",
            data:profile
        })
    } catch (error) {
        console.log("error in driver profile", error)
        return res.json({
            success:false,
            error: "Something went wrong aa"
        })
    }
}

const approveDriver = async (req, res) => {
    const { Id } = req.params;
    // console.log(Id, "id")
    if (!Id) {
        return res.json({
            success: false,
            error: "Driver not found"
        });
    }
    try {
        const driver = await approveDriverDB(Id);
        if (!driver) {
            return res.json({
                success: false,
                error: "This driver is not found"
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
            error: "Something went wrong"
        });
    }
};

const rejectDriver = async (req, res) => {
    const { Id } = req.params;
    // console.log(id)
    if (!Id) {
        return res.json({
            success: false,
            error: "Driver not found"
        });
    }
    try {
        const driver = await rejectDriverDB(Id);
        if (!driver) {
            return res.json({
                success: false,
                error: "This driver not found"
            });
        }
        return res.json({
            success: true,
            message: "Driver rejected!",
            data: driver
        })
    } catch (error) {
        console.log("Error in admin verification", error);
        return res.json({
            success: false,
            error: "Something went wrong"
        })
    }
};

const rejectedDrivers = async (req, res) => {
    try {
        const drivers = await rejectedDriversDB();
        if (!drivers) {
            return res.json({
                success: false,
                error: "Rejected drivers not found"
            });
        }
        return res.json({
            success: true,
            message: "All rejected drivers",
            data: drivers
        })
    } catch (error) {
        console.log("Error in admin controller", error);
        return res.json({
            success: false,
            error: "Something went wrong"
        });
    }
}

module.exports = { getPendingDrivers, approveDriver, rejectDriver, approvedDrivers, rejectedDrivers, driverProfile };
