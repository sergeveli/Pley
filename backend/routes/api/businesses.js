const { Router } = require('express');
const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const router = express.Router();

const asyncHandler = require('express-async-handler');

const { Business, Review } = require('../../db/models');

//(C)CREATE A NEW BUSINESS ---> WORKS
router.post('/new',
    asyncHandler(
        async (req, res) => {
                ownerId = req.body.ownerId 
                title = req.body.title 
                description = req.body.description
                address = req.body.address
                city = req.body.city
                state = req.body.state
                zip = req.body.zip
                location = req.body.location
                gymImg = req.body.gymImg
            const newBusiness = await Business.create({ 
                ownerId, 
                title, 
                description,
                address,
                city,
                state,
                zip,
                location,
                gymImg
            })
            return await res.json({})
    }))

//(R)FETCH ALL BUSINESSES -> WORKS
router.get( '/',
    asyncHandler(
        async (req, res) => {
            const businesses = await Business.findAll(
                {include: 
              {
                model: Review
              }});
            return await res.json(businesses);
    })
);

//(R)FETCH ONE BUSINESS -> WORKS
router.get('/:id',
    asyncHandler(
        async (req, res) => {
        businessId = req.params.id
            const business = await Business.findByPk(businessId, {include: Review});
            return await res.json(business);
    })
)
//(D)DELETING A BUSINESS -> WORKS
router.delete('/:id',
        asyncHandler(
            async (req, res) => {
            businessId = req.params.id
                const business = await Business.findByPk(businessId)
                await business.destroy(); 
                    return await res.json('All Gone!');
        })
    )

    
//(C)CREATE A REVIEW ---> WORKS
router.post('/:id/:userId/review/new',
asyncHandler(async(req, res)=>{
    userId = req.params.userId
    businessId = req.params.id
        const {rating, answer} = req.body
        const review = await Review.create({
            userId, 
            businessId, 
            rating, 
            answer
        })
        return res.json(review)
}))

//(R)FETCHING ALL REVIEWWS (IS THIS EVEN NECESSARY IF REVIEWS ARE AUTOMATICALLY ON EACH BUSINESS PAGE)
// router.get('/:id/reviews/',
//     asyncHandler(
//         async (req, res) => {
//             const reviews = await Review.findAll();
//             return await res.json(reviews);
//     })
// );


//(U)EDITING A REVIEW -> "WORK",
router.put('/:id/reviews/:reviewId/',
    asyncHandler(
        async(req, res) => {
            reviewId = req.params.reviewId
            rating = req.body.rating
            answer = req.body.answer
            const review = await Review.findByPk(reviewId)
            return await review.update({rating, answer})                              
}))
    
    
    
//(D)DELETE REVIEW -> WORKS
router.delete('/:id/reviews/:reviewId/',
        asyncHandler(
            async (req, res) => {
            reviewId = req.params.reviewId
                const review = await Review.findByPk(reviewId)
                await review.destroy(); 
                    return await res.json('Deleted!');
        })
    )

module.exports = router;