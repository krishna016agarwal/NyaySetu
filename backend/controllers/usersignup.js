const User=require("../models/user");
const bcrypt = require('bcryptjs');

module.exports.user= async (req,res)=>{
try {
    const { name, email, password } = req.body;
    
   
    const useremailcheck = await User.findOne({ email });
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
    const data = await User.create({
      name,
      email,
      password: hashpassword,
    });

    delete data.password;
    return res.json({ status: true, data });
  } catch (error) {
    console.log(error);
    
    return res.json({ error: error, status: false });
  }
};