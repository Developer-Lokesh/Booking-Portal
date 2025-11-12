const { permitInfoDB } = require("../../services/driver/permit.service");

const permitInfo = async (req, res) => {
    const driver = req.user.id
    // const vehicleInfo = req.user.id;
    const {vehicleInfo, permitImgURL, registrationNumber, validityDate, RC } = req.body;
    if (!vehicleInfo || !permitImgURL || !registrationNumber || !validityDate || !RC) {
        return res.json({
            success: false,
            error: "All fields required",
            required: ["vehicleInfo", "permitImgURL", "registrationNumber", "validityDate", "RC"],
        });
    }
    console.log(vehicleInfo, permitImgURL, registrationNumber, validityDate, RC , "this is data in permit")
    try {
        const permit = await permitInfoDB({ driver, vehicleInfo, permitImgURL, registrationNumber, validityDate, RC });
        if (!permit) {
            return res.json({
                success: false,
                error: "Something went wrong!"
            });
        }
        return res.json({
            success: true,
            message: "Permit registered successfully",
            data: permit,
        });
    } catch (error) {
        console.log(error);
        if (error.code === 11000) {
            return res.json({
                success: false,
                error: "Permit is already asign another vehicle"
            });
        }
        return res.json({
            success: false,
            error: "Something went wrong",
        });
    }
};
module.exports = { permitInfo };