require("dotenv").config();
const express = require("express");
const cors = require("cors")
const { connectDB } = require("./src/config/db");
const driverFunctions = require("./src/routes/driver/index");
const userFunctions = require("./src/routes/user/index");
const adminFunctions = require("./src/routes/admin/index");
const authMiddleware = require("./src/middleware/auth.middleware");
const adminOnly = require("./src/middleware/adim.middleware");
const driverOnly = require("./src/middleware/driver.middleware")
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

app.use("/driver", driverOnly, driverFunctions);

// admin function

app.use("/admin",adminOnly, adminFunctions);


app.listen(port,() => {
    console.log(`server is running on http://localhost:${port}`);
});