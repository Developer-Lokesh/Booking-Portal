require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const authRoutes = require("./src/routes/user/user.routes");
const driverRoutes = require("./src/routes/driver/auth.route");
const vehicleRegister = require("./src/routes/driver/vehicle.route");
const driverVerification = require("./src/routes/admin/verification.route");
const app = express()
const port = 4001;

connectDB();

app.use(express.json());

app.get("/", (req,res) => {
    res.send("This is the starting of booking portal");  
});

// driver auth routes

app.use("/driver", driverRoutes);

// Vehicle registration 

app.use("/vehicle", vehicleRegister);

// Driver's verification

app.use("/verification", driverVerification);

//user auth routes

app.use("/auth", authRoutes)

app.listen(port,() => {
    console.log(`server is running on http://localhost:${port}`);
});