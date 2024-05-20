const express = require('express');
const Review = require('../models/model');
const connectDB = require('../db');

const router = express.Router();

router.post('/reviews', async (req, res) => {
  try {
    await connectDB();
    const newReview = new Review({
      productId: req.body.productId,
      rating: req.body.rating,
      text: req.body.text,
      date: new Date(),
      user: {
        name: req.body.user.name,
        email: req.body.user.email
      }
    });
    await newReview.save();
    res.json({ message: 'Recenzja dodana pomyślnie' });
  } catch (error) {
    console.error('Błąd dodawania recenzji:', error);
    res.status(500).json({ error: 'Wystąpił błąd' });
  }
});

router.get('/reviews/:productId', async (req, res) => {
  try {
    await connectDB();
    const reviews = await Review.find({ productId: req.params.productId });
    res.json(reviews);
  } catch (error) {
    console.error('Błąd pobierania recenzji:', error);
    res.status(500).json({ error: 'Wystąpił błąd' });
  }
});

module.exports = router;
