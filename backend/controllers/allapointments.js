const Lawyer = require("../models/lawyer");
const Lawyerclients = require("../models/lawyerclients");
const mongoose = require("mongoose");

module.exports.allappointments = async (req, res) => {
    try {
        const id = req.params.id;
        const lawyerObjectId = new mongoose.Types.ObjectId(id);

        // Aggregate to join Lawyerclients with Lawyer collection
        const appointments = await Lawyerclients.aggregate([
            { $match: { client: lawyerObjectId } }, // Filter by client ID
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
                    "lawyerDetails.email": 1,
                    "lawyerDetails.lawFirm": 1,
                    "lawyerDetails.yearofExperience": 1,
                    "lawyerDetails.currentPosition": 1,
                    "lawyerDetails.officeAddress": 1,
                    "lawyerDetails.contactNo": 1,
                    "appointmentDate": 1,
                    "lawyerDetails.practiceAreas": 1,
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

        if (!appointments || appointments.length === 0) {
            return res.json({ status: false, message: "No appointments found" });
        }

        return res.json({ status: true, data: appointments });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: false, message: "Internal Server Error" });
    }
};
