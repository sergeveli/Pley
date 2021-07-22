const { Router } = require('express');
const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const router = express.Router();

const asyncHandler = require('express-async-handler');

const { Business, Review } = require('../../db/models');

//(C)CREATE A NEW BUSINESS
router.post('/new',
    asyncHandler(
        async (req, res) => {
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
    }))

//(R)FETCH ALL BUSINESSES
router.get( '/',
    asyncHandler(
        async (req, res) => {
            const businesses = await Business.findAll();
            return await res.json(businesses);
    })
);

//(R)FETCH ONE BUSINESS
router.get('/:id',
    asyncHandler(
        async (req, res) => {
        businessId = req.params.id
            const business = await Business.findByPk(businessId, {include: Review});
            return await res.json(business);
    })
)
//(D)DELETING A BUSINESS -> "message": "Missing where or truncate attribute in the options parameter of model.destroy."
router.delete('/:id',
        asyncHandler(
            async (req, res) => {
            businessId = req.params.id
                const review = await Business.destroy(businessId, {include: Review}); 
                return await res.json('Goodbye!');
        })
    )

    
//(C)CREATE A REVIEW ---> "null value in column \"userId\" violates not-null constraint"
router.post('/:id/:ownerId/review/new',
asyncHandler(async(req, res)=>{
    ownerId = req.params.ownerId
    businessId = req.params.id
        const {rating, answer} = req.body
        const review = await Review.create({
            ownerId, 
            businessId, 
            rating, 
            answer
        })
}))

//(R)FETCHING ALL REVIEWWS (IS THIS EVEN NECESSARY IF REVIEWS ARE AUTOMATICALLY ON EACH BUSINESS PAGE)
// router.get('/:id/reviews/',
//     asyncHandler(
//         async (req, res) => {
//             const reviews = await Review.findAll();
//             return await res.json(reviews);
//     })
// );


//(U)EDITING A REVIEW -> "message": "Cannot read property 'id' of undefined",
router.put('/:id/reviews/:reviewId/',
    asyncHandler(
        async(req, res) => {
            reviewId = req.params.id
                
}))
    
    
    
//(D)DELETE REVIEW -> "message": "Cannot read property 'id' of undefined"
router.delete('/:id/reviews/:reviewId/',
        asyncHandler(
            async (req, res) => {
            reviewId = req.params.id
                const review = await Review.destroy(reviewId); 
                    return await res.json('Deleted!');
        })
    )

module.exports = router;