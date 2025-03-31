const Lawyer = require("../models/lawyer")
const Lawyerclients = require("../models/lawyerclients")
const User = require("../models/user")

module.exports.dashboard=async(req,res)=>{

try {
    const client=await User.find({})
    const lawyer=await Lawyer.find({})
    const appointment = await Lawyerclients.aggregate([

        {
            $lookup: {
                from: "lawyers", // Name of the Lawyer collection in MongoDB
                localField: "lawyer",
                foreignField: "_id",
                as: "lawyerDetails"
            }
        },
        { $unwind: "$lawyerDetails" }, // Convert array to object
        {
            $project: {
                "lawyerDetails.name": 1,
                
               
                "appointmentDate": 1,
                
                "status": 1,
                "date":1,
                "message":1,
                "email":1,
                "name":1,
                "address":1,
                "contact":1
            }
        }
    ]);
    
    return res.json({ status: true, client,lawyer,appointment});
} catch (error) {
    return res.json({ status: false, error});   
}
}