const { fetchContacts, createContactService } = require("../services/contact.service");

exports.getContacts = async (req, res) => {
  try {
    const contacts = await fetchContacts();
    res.json({
      success: true,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.createContact = async (req, res) => {
  try {
    const { name, email, address, message } = req.body;

    if (!name || !email || !address || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, Email, Address and Message are required"
      });
    }

    const contact = await createContactService({ name, email, address, message });

    res.status(201).json({
      success: true,
      message: "Contact submitted successfully",
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
