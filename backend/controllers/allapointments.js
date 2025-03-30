const Lawyer = require("../models/lawyer");
const Lawyerclients = require("../models/lawyerclients");
const mongoose = require("mongoose");

module.exports.allappointments = async (req, res) => {
    try {
        const id = req.params.id;
        const lawyerObjectId = new mongoose.Types.ObjectId(id);

        // Find all lawyer IDs from the Lawyerclients collection
        const lawyerClients = await Lawyerclients.find({ client: lawyerObjectId });

        if (!lawyerClients || lawyerClients.length === 0) {
            return res.json({ status: false, message: "No appointment" });
        }

        // Fetch lawyer details for each lawyer ID and exclude fields
        const lawyerPromises = lawyerClients.map(async (e) => {
            return await Lawyer.findById(e.lawyer).select("-password -__v -createdAt -updatedAt -_id");
        });

        const lawyers = await Promise.all(lawyerPromises); // Wait for all promises to resolve

        return res.json({ status: true, data: lawyers });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: false, message: "Internal Server Error" });
    }
};
