const express = require("express");
const dbConnect = require("./db");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoute = require("./route/auth.route");
const contactUsRoute = require('./route/contactUs.route');
const fetchDataRoute = require('./route/fetchData.route');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const createTokenAndSaveCookie = require("./jwt/generateToken");

dotenv.config();
const app = express();

app.use(cors({
    origin: "https://ecommerce-app-frontend-flame-seven.vercel.app",
    credentials: true,
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


app.use("/", authRoute);
app.use("/contactUs", contactUsRoute);
app.use("/cart", fetchDataRoute);



dbConnect().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
});
