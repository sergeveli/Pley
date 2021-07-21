//// POST /businesses/:business_id/reviews
// const express = require('express')
// const router = express.Router();

// const asyncHandler = require('express-async-handler');

// const { Review } = require('../../db/models');

// // router.delete( '/:reviewId',
// //     asyncHandler(
// //         async (req, res) => {
// //           const review = await Review.findAll();
// //           return await res.json(review);
// //     })
// // );

// router.delete('/:id',
//     asyncHandler(
//         async (req, res) => {
//         reviewId = req.params.id
//           const review = await Review.findByPk(reviewId); /*where: businessId === id for reviews to each business*/
//           return await res.json(review);
//     })
// )
// module.exports = router;