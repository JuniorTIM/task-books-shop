const { Router } = require("express");
const { genreController } = require("../controllers/genres.controller");

const router = Router();

router.post("/genres", genreController.postGenres)
router.delete("/genres/:id", genreController.deleteGenres)
router.get("/genres", genreController.getGenres)

module.exports = router;