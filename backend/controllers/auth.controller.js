const User = require("../models/user.model");
const bcrypt = require("bcryptjs"); 
const createTokenAndSaveCookie=require("../jwt/generateToken")

const login = async (req, res) => {
  try {
    const { password, email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Invalid user credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password); 

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid user credentials" });
    }

    createTokenAndSaveCookie(user._id, res);

    const { password: pwd, ...userWithoutPassword } = user.toObject(); 

    res.status(200).json({
      message: "User logged in successfully",
      user: userWithoutPassword,
    });
  } catch (error) {
    res.status(500).send(`Error in login: something went wrong`);
  }
};

const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      return res.status(409).json({ message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    createTokenAndSaveCookie(newUser._id, res);

    const { password: pwd, ...userWithoutPassword } = newUser.toObject();

    res.status(200).json({
      message: "User created successfully",
       user: userWithoutPassword,
    });
  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).json({ message: "Something went wrong during signup" });
  }
};

const getCookie = (req, res) => {
  const token = req.cookies.jwt;

  if (token) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
};

const logOut = (req, res) => {
  try {
    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "none",
      secure: true, 
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(401).json({ success: false });
  }
};


module.exports = { signup, login,getCookie,logOut};
