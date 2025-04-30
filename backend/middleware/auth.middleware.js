const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies.jwt || req.headers['authorization']?.split(' ')[1];
        console.log(`cookies is ${req.cookies.jwt}`);

        if (!token) {
            return res.status(401).json({ error: "No token, authorization denied" });
        }

        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        if (!decoded) {
            return res.status(401).json({ error: "Invalid Token" });
        }

        req.user = decoded;

        next();
    } catch (error) {
        console.error("Error in authRoute:", err);
        res.status(500).json({ error: "Internal server error" });
    }
}



const tokenCheckMiddleware = (req, res, next) => {
    try {
        const token = req.cookies.jwt || req.headers['authorization']?.split(' ')[1];
        if (token) {
            const decoded = jwt.verify(token, process.env.JWT_TOKEN);
            if (decoded) {
                return res.status(401).json({ error: "User already logged in" });
            }
        }
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid or expired token" });
    }
};


module.exports={authMiddleware,tokenCheckMiddleware}