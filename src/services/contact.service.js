const Contact = require("../models/contact.model");

exports.fetchContacts = async () => {
  return await Contact.find().sort({ createdAt: -1 });
};

exports.createContactService = async (data) => {
  return await Contact.create(data);
};
