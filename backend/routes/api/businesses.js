const express = require('express')
const router = express.Router();

const asyncHandler = require('express-async-handler');

const { Business, Review } = require('../../db/models');



router.get('/:id/reviews/',
    asyncHandler(
        async (req, res) => {
          const reviews = await Review.findAll();
          return await res.json(reviews);
    })
);

router.post('/:id/reviews/',
    asyncHandler(
        async (req, res) => {
          const reviews = await Review.findAll();
          return await res.json(reviews);
    }))

router.delete('/:id/reviews/reviewId',
    asyncHandler(
        async (req, res) => {
        reviewId = req.params.id
          const review = await Review.findByPk(reviewId); /*where: businessId === id for reviews to each business*/
          return await res.json(review);
    })
)

router.get( '/',
    asyncHandler(
        async (req, res) => {
          const businesses = await Business.findAll();
          return await res.json(businesses);
    })
);

router.get('/:id',
    asyncHandler(
        async (req, res) => {
        businessId = req.params.id
          const business = await Business.findByPk(businessId);
          return await res.json(business);
    })
)
module.exports = router;