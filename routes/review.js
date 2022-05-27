const { Router } = require("express");
const { reviewController } = require("../controllers/reviews.controller");

const router = Router();

router.post("/reviews", reviewController.postReviewByBook)
router.delete("/reviews/:id", reviewController.deleteReviews)
router.get("/reviews/:id", reviewController.getReviewsByBook)

module.exports = router;