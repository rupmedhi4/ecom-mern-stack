const jwt = require('jsonwebtoken');

const createTokenAndSaveCookie = (user_id, res) => {
  const token = jwt.sign({ user_id }, process.env.JWT_TOKEN, {
    expiresIn: '14d',
  });

  res.cookie("jwt", token, {
    httpOnly: true,          
    secure: false,              
    sameSite: "Lax",          
    maxAge: 14 * 24 * 60 * 60 * 1000
  });
};

module.exports = createTokenAndSaveCookie;
