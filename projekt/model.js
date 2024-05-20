const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  productId: String,
  rating: Number,
  text: String,
  date: Date,
  user: {
    name: String,
    email: String
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
