import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import states from './states'
import { addBusiness } from '../../store/businessReducer'

import './form.css'


const NewBusinessForm = (params) => {
  const { visible, onClose } = params

  // form state
  const [errors, setErrors] = useState([])
  const [submitting, setSubmitting] = useState(false)

  // form data
  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)
  const [location, setLocation] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [streetAddress, setStreetAddress] = useState(null)
  const [city, setCity] = useState(null)
  const [state, setState] = useState(null)
  const [zip, setZip] = useState(null)

  const dispatch = useDispatch()
  const handleSubmit = event => {
    event.preventDefault()
    setErrors([])
    setSubmitting(true)
    const business = {
      title: name,
      description,
      address: streetAddress,
      city,
      state,
      location,
      zip,
      gymImg: imageUrl
    }
    dispatch(addBusiness(business))
  }

  return (
    <div style={{ display: visible ? 'block': 'none'}} className="scrim">
      <div className='formContainer'>
      <form onSubmit={handleSubmit}>
        <div className="formCard">
          <button href="#" onClick={onClose}>Cancel</button>

        <h4 className="title">New Gym</h4>
        {errors.length > 0 &&
         <ul>
           {errors.map(e => <li className="error" key={e}>{e}</li>)}
         </ul>
        }
          <input type="text" value={name} placeholder="Business Name" onChange={e => setName(e.target.value)} />
          <input type="text" value={location} placeholder="Location" onChange={e => setLocation(e.target.value)} />
          <textarea cols="19" rows="4" placeholder="Description" onChange={e => setDescription(e.target.value)}>{description}</textarea>
          <input type="text" value={imageUrl} placeholder="image url, e.g. https://..../...jpg" onChange={e => setImageUrl(e.target.value)} />
          <div className="address">
            <input type="text" value={streetAddress} placeholder="Street Address" onChange={e => setStreetAddress(e.target.value)} />
            <div className="cityStateZip">
              <input className="city" type="text" value={city} placeholder="City" onChange={e => setCity(e.target.value)} />
              <select className="state" type="text" onChange={e => setState(e.target.value)}>
                {states.map(({ name, abbreviation: abb }) => <option key={abb} value={abb}>{name} ({abb})</option>)}
              </select>
              <input className="zip" type="text" value={zip} placeholder="Zip" onChange={e => setZip(e.target.value)} />
            </div>
          </div>
          <button disabled={submitting} className="button" type="submit">Save</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default NewBusinessForm