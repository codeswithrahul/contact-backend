const ParlourContact = require("../models/parlourContact.model");

exports.fetchParlourContacts = async () => {
  return await ParlourContact.find().sort({ createdAt: -1 });
};

exports.createParlourContactService = async (data) => {
  return await ParlourContact.create(data);
};

exports.getParlourContactById = async (id) => {
  return await ParlourContact.findById(id);
};

exports.addNoteToParlourContact = async (contactId, noteContent) => {
  const contact = await ParlourContact.findById(contactId);
  if (!contact) {
    throw new Error("Contact not found");
  }
  
  contact.notes.push({ content: noteContent });
  await contact.save();
  return contact;
};
