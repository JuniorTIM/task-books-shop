const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema({
  text: String,
  name: String,
  bookId: {
    ref: "book.model",
    type: mongoose.SchemaTypes.ObjectId
  },
});

const reviews = mongoose.model("reviews", reviewsSchema);

module.exports = reviews;
