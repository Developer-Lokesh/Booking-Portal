const { registerDB, loginDB } = require("../../services/driver/auth.service");
const { generateToken } = require("../../utils");

const register = async (req, res) => {
    const {name, email, password, phone, licenseNumber} = req.body;
    if(!name || !email || !password || !phone || !licenseNumber){
        return res.json({
            success:false,
            message:"All fields require",
            require:["name", "email", "password", "phone","licenseNumber"],
        });
    }
    try {
        const driverAuth = await registerDB({name, email, password, phone, licenseNumber});
        // console.log(driverAuth)
        if(!driverAuth){
            return res.json({
                success:false,
                message:'SignUp failed',
            });
        }
    
        return res.json({
            success:true,
            message:"Successfully signUp",
            data: driverAuth
        });
    } catch (error) {
        console.log(error);
         if(error===11000){
            return res.json({
                error:"Driver already exist"
            });
        }
        console.log("Error in driver controller" || "Something went wrong");
        return res.json({
            success:false,
            message: error || "Something went wrong",
        })
    }
};

const login = async (req, res) => {
    const {licenseNumber, email, password} = req.body;
    // console.log(licenseNo, email, password);
    if(!licenseNumber){
        res.json({
            success:false,
            message:"Please enter the licenseNo"
        })
    }
    if(!email){
        res.json({
            success:false,
            message:"Please enter the email"
        })
    }
    if(!password){
        res.json({
            success:false,
            message:"Please enter the password"
        })
    }
    try {
        const driverLogin = await loginDB({licenseNumber, email, password});
        // console.log(driverLogin,"controller")
        if(!driverLogin){
            return res.json({
                success:false,
                message:"Driver not exist with this email"
            });
        }
         
        const {accesstoken, reftoken} = generateToken({
            id:driverLogin._id,
            name:driverLogin.name,
            email:driverLogin.email,
            phone:driverLogin.phone
        });

        return res.json({
            success:true,
            message:"Successfully loggedIn",
            data:{ driverLogin, accesstoken,reftoken}
        });
    } catch (error) {
        console.log("Error in driver login controller",error);
        return res.json({
            success:false,
            message:"Login failed"
        });
    }
};

module.exports = {login, register}