const Lawyer = require("../models/lawyer");

module.exports.alllawyers=async(requestAnimationFrame,res)=>{
try {
    const lawyer=await Lawyer.find({})

    
    return res.json({status:true,lawyer})
} catch (error) {
    return res.json({status:false,error})
    
}
} 