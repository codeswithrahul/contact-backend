const ParlourReview = require("../models/parlourReview.model");

exports.fetchParlourReviews = async () => {
  return await ParlourReview.find().sort({ createdAt: -1 });
};

exports.createParlourReviewService = async (data) => {
  return await ParlourReview.create(data);
};

exports.getParlourReviewById = async (id) => {
  return await ParlourReview.findById(id);
};

exports.addNoteToParlourReview = async (reviewId, noteContent) => {
  const review = await ParlourReview.findById(reviewId);
  if (!review) {
    throw new Error("Review not found");
  }
  
  review.notes.push({ content: noteContent });
  await review.save();
  return review;
};
