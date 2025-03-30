const Lawyer = require("../models/lawyer");
const bcrypt = require("bcrypt");
module.exports.lawyerlogin=async(req,res)=>{
    try {
        const {email,password}=req.body;
    const user=await Lawyer.findOne({email})
   
    
    if (!user) {
        return res.json({status:false,message:" Registration Number/Email are unvalid"})
        
    }
   
  
    
    const isPasswordValid=await bcrypt.compare(password,user.password);
 
    
    if (!isPasswordValid) {
       
        
        return res.json({status:false,message:"Incorrect Password"})
    }
   
    delete user.password;
    return res.json({status:true,user})
    } catch (error) {
        return res.json({error: error, status: false})
    }
    
}