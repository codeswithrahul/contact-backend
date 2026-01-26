const { 
  fetchParlourReviews, 
  createParlourReviewService,
  getParlourReviewById,
  addNoteToParlourReview
} = require("../services/parlourReview.service");

exports.getParlourReviews = async (req, res) => {
  try {
    const reviews = await fetchParlourReviews();
    res.json({
      success: true,
      data: reviews
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.createParlourReview = async (req, res) => {
  try {
    const { name, phone, message, rating } = req.body;

    if (!name || !phone || !message || !rating) {
      return res.status(400).json({
        success: false,
        message: "Name, Phone, Message and Rating are required"
      });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5"
      });
    }

    const review = await createParlourReviewService({ name, phone, message, rating });

    res.status(201).json({
      success: true,
      message: "Parlour review submitted successfully",
      data: review
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await getParlourReviewById(id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found"
      });
    }

    res.json({
      success: true,
      data: review
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

    const review = await addNoteToParlourReview(id, note);

    res.status(201).json({
      success: true,
      message: "Note added successfully",
      data: review
    });
  } catch (error) {
    if (error.message === "Review not found") {
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
