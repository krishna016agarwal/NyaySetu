const Lawyerclients = require("../models/lawyerclients");
const mongoose = require("mongoose");

module.exports.allclients = async (req, res) => {
    try {
        const id = req.params.id;

        // Check if ID is present
        if (!id) {
            return res.status(400).json({ status: false, error: "Lawyer ID is required" });
        }

        

        // Convert ID to ObjectId
        const lawyerObjectId = new mongoose.Types.ObjectId(id);

        // Fetch only clients related to the given lawyer ID
        const clients = await Lawyerclients.find({ lawyer: lawyerObjectId });

        // Debugging: Print all lawyer IDs
       

        return res.json({ status: true, clients });
    } catch (error) {
        console.error("Error fetching clients:", error);
        return res.status(500).json({ status: false, error: error.message });
    }
};
