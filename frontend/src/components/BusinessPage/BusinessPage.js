import { set } from 'js-cookie'
import React, {useEffect, useState} from 'react'
import  { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {getSingleBusiness, addSingleReview, deleteReview, deleteSingleBusiness} from '../../store/businessReducer'
import './businessPage.css'
import ReviewEditForm from '../ReviewEditForm'


const BusinessPage = () =>{
const dispatch = useDispatch();
const { businessId } = useParams();

const business = useSelector(state => state.business.singleBusiness);
const [rating, setRating] = useState('')
const [answer, setAnswer] = useState('')
const [editingReview, setEditingReview] = useState(null)

const handleSubmit = async(e) => {
    e.preventDefault()
    console.log('i')
    const reviewObj = { userId: 1, businessId: +businessId, rating: +rating, answer };
    dispatch(addSingleReview(reviewObj))
}

const didClickEditReview = (event, review)=>{
    event.preventDefault()
    setEditingReview(review)
}

const stopEditingReview = () =>{
    setEditingReview(null)
}

const didClickDeleteReview = (event, review)=>{
    event.preventDefault()
    dispatch(deleteReview(review))
}

const deleteBusiness = (event) => {
  event.preventDefault()
  if ( window.confirm('Really delete gym?')) {
    dispatch(deleteSingleBusiness(businessId))
    window.location.href = '/'
  }
}

useEffect(()=> {
     dispatch(getSingleBusiness(businessId)) 
 },[dispatch])

    return (
    <div className='review_container'>
        {editingReview && <ReviewEditForm review={editingReview} onClose={stopEditingReview} visible></ReviewEditForm>}
            <div>
                {business && 
                <>
                <a href="#" onClick={deleteBusiness} style={{ position: 'relative', right: 0, top: 0 }}>Delete</a>
                <h1 className='name'>{business.title}</h1>
                <div className='avatar'><img src={business.gymImg}/></div>
                <h1 className='about'>{business.description}</h1>
                <div className='addressDetails'>
                    <div className='addy'>{business.address}</div>
                    <div className='city'>{business.city}</div>
                    <div className='state'>{business.state}</div>
                    <div className='zip'>{business.zip}</div>
                    <div className='neighborhood'>{business.location}</div>
                </div>
                </>
                }
            </div>
            <div>
        {business && (
          <div>
            {business.Reviews?.map((review) => (
              <div className='reviews'>{review.answer} {new Array(review.rating).fill("⭐")} 
              <a href='#' onClick={event => didClickEditReview(event, review)}>Edit</a>
              &nbsp;
              <a href='#' onClick={event => didClickDeleteReview(event, review)}>Delete</a></div>
            ))}
          </div>
        )}
      </div>

        <form onSubmit={handleSubmit}>
        <div className='nameAndRating'>
            <label className='nameText'>
            Name:
                <input type="text" name="name" />
            </label>
            <label className='ratingText'>
            Rating:
                <select value={rating} onChange={(e)=>{setRating(e.target.value)}}>
                    {[1,2,3,4,5].map(n => <option value={n}>{new Array(n).fill("⭐")}</option>)}
                </select>
            </label>
        </div>
        <div>
            <label className='thoughts'>
                What'd You Think?:
            </label>
        </div>
            <textarea value={answer} onChange={(e)=>{setAnswer(e.target.value)}}></textarea>
            <input type="submit" value="Submit"
             />
        </form>
    </div>
    )
}


export default BusinessPage;