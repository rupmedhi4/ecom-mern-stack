const ContactUsModel = require("../models/contact-us.model");


const addContactUsData = async (req, res) => {
    try {
        const { fullName, email, number } = req.body;

        if (!fullName || !email || !number) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const contactUs = new ContactUsModel({
            fullName,
            email,
            number,
        });

        const savedContact = await contactUs.save();

        res.status(201).json({
            message: "Data sent successfully",
            data: savedContact,
        });
    } catch (error) {
        console.error("Error in addContactUsData:", error);
        res.status(500).json({
            message: "Something went wrong during data submission",
            error: error.message,
        });
    }
};

module.exports = { addContactUsData };