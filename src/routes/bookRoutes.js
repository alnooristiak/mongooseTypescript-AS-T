const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

// Ans 2 Find books by genre
router.get('/books/genre/:genre', async (req, res) => {
  const { genre } = req.params;

  try {
    const books = await Book.find({ genre });
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Ans 3 Find books by genre and publisher
router.get('/books/genre/:genre/publisher/:publisher', async (req, res) => {
  const { genre, publisher } = req.params;

  try {
    const books = await Book.find({ genre, 'publisher.name': publisher });
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Ans 4 Get featured books
router.get('/books/featured', async (req, res) => {
  try {
    const featuredBooks = await bookController.getFeaturedBooks();
    res.json(featuredBooks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Ans 5 Update book prices
router.put('/books/update-prices', async (req, res) => {
  try {
    await bookController.updateBookPrices();
    res.json({ message: 'Book prices updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
