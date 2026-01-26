const { 
  fetchParlourContacts, 
  createParlourContactService,
  getParlourContactById,
  addNoteToParlourContact
} = require("../services/parlourContact.service");

exports.getParlourContacts = async (req, res) => {
  try {
    const contacts = await fetchParlourContacts();
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

exports.createParlourContact = async (req, res) => {
  try {
    const { name, phone, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, Phone and Message are required"
      });
    }

    const contact = await createParlourContactService({ name, phone, message });

    res.status(201).json({
      success: true,
      message: "Parlour contact submitted successfully",
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await getParlourContactById(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found"
      });
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.addNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { note } = req.body;

    if (!note) {
      return res.status(400).json({
        success: false,
        message: "Note content is required"
      });
    }

    const contact = await addNoteToParlourContact(id, note);

    res.status(201).json({
      success: true,
      message: "Note added successfully",
      data: contact
    });
  } catch (error) {
    if (error.message === "Contact not found") {
      return res.status(404).json({
        success: false,
        message: error.message
      });
    }
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
