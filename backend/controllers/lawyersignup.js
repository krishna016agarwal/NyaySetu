const Lawyer = require("../models/lawyer");
const bcrypt = require('bcryptjs');

module.exports.lawyer = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      
    } = req.body;
  
    const useremailcheck = await Lawyer.findOne({ email });
    if (useremailcheck) {
      return res.json({ message: "Email already used", status: false });
    }
  
    if (password.length > 30) {
      return res.json({
        message: "password should not exceed 30",
        status: false,
      });
    }
  
    const hashpassword = await bcrypt.hash(password, 10);
    const user = await Lawyer.create({
      name,
      email,
      password: hashpassword,
    
    });
   
    
    delete user.password;
    return res.json({ status: true, user });
  } catch (error) {
    console.log(error);
    
    return res.json({ error: error, status: false });
  }
};
