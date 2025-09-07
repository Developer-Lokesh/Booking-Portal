const { registerDB, loginDB } = require("../../services/user/auth.services");
const { generateToken } = require("../../utils");

const register = async (req, res) => {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password || !phone) {
        return res.json({
            success: false,
            message: "All field require",
            require:"['name', 'email', 'password', 'phone']"
        });
    }
    try {
        const user = await registerDB({ name, email, password, phone });
        if (!user) {
            return res.json({
                success: false,
                message: "SignUp failed!"
            });
        }
        res.json({
            success: true,
            message: "User registered successfully",
            data: user,
        })
    } catch (error) {
        console.log(error)
        if(error===11000){
            return res.json({
                error:"User already exist"
            });
        }
        console.log("Error in register controller" || "Something went wrong");
        return res.json({
            success: false,
            message: "Something went wrong"
        });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email) {
        return res.json({
            success: false,
            message: "Email is required"
        });
    }
    if (!password) {
        return res.json({
            success: false,
            message: "password is required"
        });
    }
    try {
        const user = await loginDB({email, password});

        if(!user){
            return res.json({
                success:false,
                message:"User not found",
            });
        }

        const {accesstoken, reftoken} = generateToken({
            id:user._id,
            name:user.name,
            email:user.email,
            password:user.password
        });

        return res.json({
            success:true,
            message:"User loggedIn successfully",
            data: {user, accesstoken, reftoken},
        });
        
    } catch (error) {
        console.log(error);
        console.log("Erron in login controller" || "Something went wrong");
        return res.json({
            success: false,
            message: "Login failed"
        });
    }
};

module.exports = {register, login}