const genresModel = require("../models/genre.model");

module.exports.genreController = {
  postGenres: (req, res) => {
    genresModel
      .create({
        name: req.body.name,
        text: req.body.text,
      })
      .then(() => {
        res.json("Жанр добавлен");
      })
      .catch(() => {
        res.json("Ошибка при добавлении жанра");
      });
  },

  deleteGenres: (req, res) => {
    genresModel
      .findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Жанр удален");
      })
      .catch(() => {
        res.json("Ошибка при удалении жанра");
      });
  },

  getGenres: (req, res) => {
    genresModel
      .find({})
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошикба при получении жанров");
      });
  },
};
