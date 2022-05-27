const reviewsModel = require("../models/review.model");

module.exports.reviewController = {
  postReviewByBook: (req, res) => {
    reviewsModel.create({
      text: req.body.text,
      name: req.body.name,
      bookId: req.body.bookId,
    }).then(() => {
      res.json("Рецензия добавлена")
    }).catch(() => {
      res.json("Ошибка при добавлении рецензии")
    })
  },

  deleteReviews: (req, res) => {
    reviewsModel
      .findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Рецензия удалена");
      })
      .catch(() => {
        res.json("Ошибка при удалении рецензии");
      });
  },

  getReviewsByBook: (req, res) => {
    reviewsModel
      .find({ bookId: req.params.id })
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json("Ошибка при получении рецензий к определенной книге");
      });
  },
};
