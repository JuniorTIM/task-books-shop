const Book = require("../models/book.model");

module.exports.bookController = {
  postBook: (req, res) => {
    Book.create({
      name: req.body.name,
      author: req.body.author,
      genresId: req.body.genresId,
    })
      .then(() => {
        res.json("Книга добавлена");
      })
      .catch(() => {
        res.json("Ошибка при добавлении книги");
      });
  },

  deleteBook: (req, res) => {
    Book.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Книга удалена");
      })
      .catch(() => {
        res.json("Ошибка при удалении книги");
      });
  },

  patchBook: (req, res) => {
    Book.findByIdAndUpdate(req.params.id, {
      ame: req.params.name,
      author: req.params.author,
      genre: req.params.genre,
      genresId: req.params.genresId,
    })
      .then(() => {
        res.json("Книга изменена");
      })
      .catch(() => {
        res.json("Ошибка при изменении книги");
      });
  },

  getBookById: (req, res) => {
    Book.findById(req.params.id)
      .populate("genresId")
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при получении книги");
      });
  },

  getBooks: (req, res) => {
    Book.find()
      .populate("genresId")
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json(error);
      });
  },

  getBookByGenre: (req, res) => {
    Book.find({ genresId: req.params.id })
      .populate("genresId")
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при получении книги определенного жанра");
      });
  },
};
