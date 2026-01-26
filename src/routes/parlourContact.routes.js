const express = require("express");
const router = express.Router();
const { 
  getParlourContacts, 
  createParlourContact,
  getContactById,
  addNote
} = require("../controllers/parlourContact.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     ParlourContact:
 *       type: object
 *       required:
 *         - name
 *         - phone
 *         - message
 *       properties:
 *         _id:
 *           type: string
 *           description: Auto-generated contact ID
 *         name:
 *           type: string
 *           description: Customer name
 *         phone:
 *           type: string
 *           description: Customer phone number
 *         message:
 *           type: string
 *           description: Customer message/inquiry
 *         notes:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         _id: 507f1f77bcf86cd799439011
 *         name: John Doe
 *         phone: "1234567890"
 *         message: Interested in bridal makeup package
 *         notes: []
 *         createdAt: 2026-01-26T06:36:44.521Z
 *         updatedAt: 2026-01-26T06:36:44.521Z
 */

/**
 * @swagger
 * /api/parlour/contact:
 *   get:
 *     summary: Get all parlour contacts
 *     tags: [Parlour Contact]
 *     responses:
 *       200:
 *         description: List of all contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ParlourContact'
 */
router.get("/", getParlourContacts);

/**
 * @swagger
 * /api/parlour/contact:
 *   post:
 *     summary: Create a new parlour contact
 *     tags: [Parlour Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *               - message
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               message:
 *                 type: string
 *             example:
 *               name: Jane Smith
 *               phone: "9876543210"
 *               message: Want to book for wedding makeup
 *     responses:
 *       201:
 *         description: Contact created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/ParlourContact'
 *       400:
 *         description: Validation error
 */
router.post("/", createParlourContact);

/**
 * @swagger
 * /api/parlour/contact/{id}:
 *   get:
 *     summary: Get a specific parlour contact by ID
 *     tags: [Parlour Contact]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Contact ID
 *     responses:
 *       200:
 *         description: Contact details with notes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/ParlourContact'
 *       404:
 *         description: Contact not found
 */
router.get("/:id", getContactById);

/**
 * @swagger
 * /api/parlour/contact/{id}/notes:
 *   post:
 *     summary: Add a note to a parlour contact
 *     tags: [Parlour Contact]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Contact ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - note
 *             properties:
 *               note:
 *                 type: string
 *             example:
 *               note: Called customer, discussed pricing. Follow up next week.
 *     responses:
 *       201:
 *         description: Note added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/ParlourContact'
 *       400:
 *         description: Note content is required
 *       404:
 *         description: Contact not found
 */
router.post("/:id/notes", addNote);

module.exports = router;

