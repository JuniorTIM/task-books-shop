const mongoose = require("mongoose");

const authorsSchema = mongoose.Schema({
  name: String,
  text: String,
});

const authors = mongoose.model("authors", authorsSchema);

module.exports = authors;
