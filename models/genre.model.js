const mongoose = require("mongoose");

const genreSchema = mongoose.Schema({
  name: String,
  text: String,
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;
