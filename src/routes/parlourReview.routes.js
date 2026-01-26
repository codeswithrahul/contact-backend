const express = require("express");
const router = express.Router();
const { 
  getParlourReviews, 
  createParlourReview,
  getReviewById,
  addNote
} = require("../controllers/parlourReview.controller");

/**
 * @swagger
 * components:
 *   schemas:
 *     ParlourReview:
 *       type: object
 *       required:
 *         - name
 *         - phone
 *         - message
 *         - rating
 *       properties:
 *         _id:
 *           type: string
 *           description: Auto-generated review ID
 *         name:
 *           type: string
 *           description: Customer name
 *         phone:
 *           type: string
 *           description: Customer phone number
 *         message:
 *           type: string
 *           description: Review message
 *         rating:
 *           type: number
 *           minimum: 1
 *           maximum: 5
 *           description: Rating from 1 to 5
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
 *         name: Sarah Johnson
 *         phone: "9876543210"
 *         message: Excellent service! Very professional staff.
 *         rating: 5
 *         notes: []
 *         createdAt: 2026-01-26T04:06:08.633Z
 *         updatedAt: 2026-01-26T04:06:08.633Z
 */

/**
 * @swagger
 * /api/parlour/review:
 *   get:
 *     summary: Get all parlour reviews
 *     tags: [Parlour Review]
 *     responses:
 *       200:
 *         description: List of all reviews
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
 *                     $ref: '#/components/schemas/ParlourReview'
 */
router.get("/", getParlourReviews);

/**
 * @swagger
 * /api/parlour/review:
 *   post:
 *     summary: Create a new parlour review
 *     tags: [Parlour Review]
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
 *               - rating
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               message:
 *                 type: string
 *               rating:
 *                 type: number
 *                 minimum: 1
 *                 maximum: 5
 *             example:
 *               name: Maria Garcia
 *               phone: "5551234567"
 *               message: Amazing bridal makeup! Highly recommend!
 *               rating: 5
 *     responses:
 *       201:
 *         description: Review created successfully
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
 *                   $ref: '#/components/schemas/ParlourReview'
 *       400:
 *         description: Validation error (missing fields or invalid rating)
 */
router.post("/", createParlourReview);

/**
 * @swagger
 * /api/parlour/review/{id}:
 *   get:
 *     summary: Get a specific parlour review by ID
 *     tags: [Parlour Review]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Review ID
 *     responses:
 *       200:
 *         description: Review details with notes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/ParlourReview'
 *       404:
 *         description: Review not found
 */
router.get("/:id", getReviewById);

/**
 * @swagger
 * /api/parlour/review/{id}/notes:
 *   post:
 *     summary: Add a note to a parlour review
 *     tags: [Parlour Review]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Review ID
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
 *               note: Contacted customer to thank them. Asked permission for testimonial.
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
 *                   $ref: '#/components/schemas/ParlourReview'
 *       400:
 *         description: Note content is required
 *       404:
 *         description: Review not found
 */
router.post("/:id/notes", addNote);

module.exports = router;

