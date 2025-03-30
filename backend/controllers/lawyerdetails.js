const Lawyer = require("../models/lawyer");
module.exports.lawyerdetails = async (req, res) => {
  try {
    const { email, registrationNumber, yearofExperience, contactNo, officeAddress, lawFirm, currentPosition, practiceAreas, Education,
    } = req.body; // Get data from frontend


    const updatedUser = await Lawyer.findOneAndUpdate(
      { email }, // User ID from URL
      {
        registrationNumber,
        yearofExperience,
        contactNo,
        officeAddress,
        lawFirm,
        currentPosition,
        practiceAreas,
        Education,
      }, // Fields to update
      { new: true, runValidators: true } // Return updated user, run validation
    );
   
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found", status: false });
    }

    return res.json({ message: "Deatils updated ", status: true }); // Send updated user data
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Error updating user", error });
  }
};

module.exports.updatelawyer = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      email,
      registrationNumber,
      yearofExperience,
      contactNo,
      officeAddress,
      lawFirm,
      currentPosition,
      practiceAreas,
      Education,
    } = req.body;


    const updatedFields = {};
    if (registrationNumber !== undefined &&registrationNumber !== "")  updatedFields.registrationNumber = registrationNumber;
    if (email !== undefined && email !== "")  updatedFields.email = email;
    if (Education !== undefined && Education !== "")  updatedFields.Education = Education;
    if (practiceAreas !== undefined && practiceAreas !== "")  updatedFields.practiceAreas = practiceAreas;
    if (currentPosition !== undefined && currentPosition !== "")  updatedFields.currentPosition = currentPosition;
    if (lawFirm !== undefined && lawFirm !== "")  updatedFields.lawFirm = lawFirm;
    if (yearofExperience !== undefined && yearofExperience !== "")  updatedFields.yearofExperience = yearofExperience;
    if (contactNo !== undefined && contactNo !== "") updatedFields.contactNo = contactNo;
    if (officeAddress !== undefined && officeAddress !== "")  updatedFields.officeAddress = officeAddress;

    const result = await Lawyer.findOneAndUpdate(
      { _id: id },
      { $set: updatedFields },
      { new: true } // Return the updated document
    );
   
    if(Object.keys(updatedFields).length===0){
      return res.json({
        message: "Update fails, please enter fileds",
        status: false,
      });
    }
    if (result) {
      return res.json({ status: true, user: result });
    }
   
    
    
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Update fails, please enter unique fileds",
      status: false,
    });
  }
};
