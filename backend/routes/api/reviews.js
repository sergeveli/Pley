// //// POST /businesses/:business_id/reviews
// const express = require('express')
// const router = express.Router();

// const asyncHandler = require('express-async-handler');

// const { Business } = require('../../db/models');

// router.get( '/',
//     asyncHandler(
//         async (req, res) => {
//           const businesses = await Business.findAll();
//           return await res.json(businesses);
//     })
// );

// router.post('/:id',
//     asyncHandler(
//         async (req, res) => {
//         businessId = req.params.id
//           const business = await Business.findByPk(businessId); where: businessId === id for reviews to each business
//           return await res.json(business);
//     })
// )
// module.exports = router;