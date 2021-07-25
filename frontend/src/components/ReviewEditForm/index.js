import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateReview } from '../../store/businessReducer'

import './style.css'

const ReviewEditForm = ({ visible, review, onClose }) => {
  const dispatch = useDispatch()

  const [answer, setAnswer] = useState(review.answer)
  const [rating, setRating] = useState(review.rating)

  const handleSubmit = () => {
    dispatch(updateReview({ ...review, answer, rating }))
    onClose()
  }

  return (
    <div style={{display: visible ? 'block' : 'none'}} className="review_backdrop">
      <div class="review_container">
        <a href="#" onClick={onClose}>Cancel</a>
        <form onSubmit={handleSubmit}>
          <input type="text" value={answer} onChange={e => setAnswer(e.target.value)} />
          <select onChange={e => setRating(e.target.value)}>
          {[1,2,3,4,5].map(n => <option selected={n==rating} value={n}>{new Array(n).fill("⭐").join('')}</option>)}
          </select>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  )
}

export default ReviewEditForm
