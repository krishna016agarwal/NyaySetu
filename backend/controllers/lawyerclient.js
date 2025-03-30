const Lawyerclients = require("../models/lawyerclients");
const mongoose = require('mongoose');
module.exports.lawyerclient = async (req, res) => {
  try {
    const { lawyer,client,caseType,date,status,contact,address,message,email,name } =
      req.body;
    
      
    const data = await Lawyerclients.create({
      lawyer,client,caseType,date,status,contact,address,message,email,name
    });
    if(!data) return res.json({ status: false, message:"Request fails"});
    return res.json({ status: true, data});
  } catch (error) {
    console.log(error);
    
    return res.json({ error: error, status: false });
  }
};



module.exports.appointment = async (req, res) => {
  try {
    const { prop, id } = req.body;
   

    // Ensure ID is valid before proceeding
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ status: false, message: "Invalid ObjectId" });
    }
   
    
if (prop=="Cancel") {

 await Lawyerclients.findByIdAndDelete(id)
  return res.json({ status: true});
} else {
  const data = await Lawyerclients.findByIdAndUpdate(
    id, // ✅ Pass as a direct string, not as an object
    { status: prop },
    { new: true } // Return updated document
  );
  if (!data) {
    return res.json({ status: false, message: "Request failed" });
  }
  
  return res.json({ status: true, data });
}
    

   
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Server error" });
  }
};

