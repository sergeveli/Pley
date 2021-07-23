import { set } from 'js-cookie'
import React, {useEffect, useState} from 'react'
import  { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {getSingleBusiness, addSingleReview} from '../../store/businessReducer'




const BusinessPage = () =>{
const dispatch = useDispatch();
const { businessId } = useParams();

const business = useSelector(state => state.business.singleBusiness);
const [rating, setRating] = useState('')
const [answer, setAnswer] = useState('')

const handleSubmit = async(e) => {
    e.preventDefault()
    const reviewObj = {userId:1, businessId,rating, answer}
    dispatch(addSingleReview(reviewObj))
}

useEffect(()=> {
     dispatch(getSingleBusiness(businessId)) 
 },[dispatch])

    return (
    <div>
            <div>
                {business && 
                <div>{business.title}</div>} 
            </div>
        <form>
            <label>
            Name:
                <input type="text" name="name" />
            </label>
            <label>
            Rating:
                <select value={rating} onChange={(e)=>{setRating(e.target.value)}}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
            </label>
            <label>
                What'd You Think?:
            </label>
            <textarea value={answer} onChange={(e)=>{setAnswer(e.target.value)}}></textarea>
            <input type="submit" value="Submit"
            onSubmit={handleSubmit} />
        </form>
    </div>
    )
}


export default BusinessPage;