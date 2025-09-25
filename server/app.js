require("dotenv").config();
const express = require("express");
const cors = require("cors")
const { connectDB } = require("./src/config/db");
// const authRoutes = require("./src/routes/user/user.routes");
// const driverRoutes = require("./src/routes/driver/auth.route");
// const vehicleRegister = require("./src/routes/driver/vehicle.route");
// const driverVerification = require("./src/routes/admin/verification.route");
// const rideBooking = require("./src/routes/user/ride.route");
// const getAllUsers = require("./src/routes/admin/user.route");
// const permitReg = require("./src/routes/driver/permit.route");
const driverFunctions = require("./src/routes/driver/index");
const userFunctions = require("./src/routes/user/index");
const adminFunctions = require("./src/routes/admin/index");
const authMiddleware = require("./src/middleware/auth.middleware");
const adminOnly = require("./src/middleware/adim.middleare");
const auth = require("./src/routes/user.routes");
const driverAuthen = require("./src/routes/driverAuth.route")
const app = express();
const port = 4001;

connectDB();

app.use(cors());

app.use(express.json());

app.get("/", (req,res) => {
    res.send("This is the starting of booking portal");  
});

app.use("/auth", auth);
app.use("/driverAuth", driverAuthen);

app.use(authMiddleware);


// user Functions

app.use("/user", userFunctions);

// driver function

app.use("/driver", driverFunctions);

// admin function

app.use("/admin",adminOnly, adminFunctions);

// get all users and drivers 

// app.use("/users", getAllUsers );

// // driver auth routes

// app.use("/driver", driverRoutes);

// // Vehicle registration 

// app.use("/vehicle", vehicleRegister);

// // permit registration

// app.use("/permitreg", permitReg);

// // Driver's verification

// app.use("/verification", driverVerification);

// //user auth routes

// app.use("/auth", authRoutes);

// // booking ride

// app.use("/booking", rideBooking);

app.listen(port,() => {
    console.log(`server is running on http://localhost:${port}`);
});