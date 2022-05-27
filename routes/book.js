const { Router } = require("express");
const { bookController } = require("../controllers/books.controller");

const router = Router();

router.post("/books", bookController.postBook);
router.delete("/books/:id", bookController.deleteBook)
router.patch("/books/:id", bookController.patchBook)
router.get("/books/:id", bookController.getBookById)
router.get("/books", bookController.getBooks)
router.get("/books/gen/:id", bookController.getBookByGenre)

module.exports = router;
