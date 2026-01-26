const express = require("express");
const router = express.Router();
const { getContacts, createContact } = require("../controllers/contact.controller");

// GET all contacts
router.get("/", getContacts);

// POST new contact
router.post("/", createContact);

module.exports = router;
