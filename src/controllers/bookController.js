const Book = require('../models/book');

// Answer 4
const getFeaturedBooks = async () => {
  const featuredBooks = await Book.find({ rating: { $gte: 4 } });

  featuredBooks.forEach((book) => {
    book.featured = book.rating >= 4.5 ? 'BestSeller' : 'Popular';
  });

  return featuredBooks;
};

// Answer 5
const updateBookPrices = async () => {
  await Book.updateMany(
    { publicationYear: { $gt: 2020 }, price: { $type: 'string' } },
    { $set: { price: { $toInt: '$price' } } }
  );
};

module.exports = { getFeaturedBooks, updateBookPrices };
