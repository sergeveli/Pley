import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import './home.css'
import NewBusinessForm from '../newBusinessPage/form'


import {getAllBusinesses} from '../../store/businessReducer'

const Home = () => {
    const [showNewForm, setShowNewForm] = useState(false)
    const dispatch = useDispatch();
    const { businessId } = useParams();
    const businesses = useSelector((state)=>(state.business.allBusiness))
    console.log(businesses)

    useEffect(() => {
        dispatch(getAllBusinesses())
    },[dispatch])

    let businessList;
    if(businesses){
        businessList = businesses.map(business=>(
        <div className='business_container card'>
            <div className='avatar'> 
                <img src={business.gymImg}/>
            </div>
            <a>
            <h1 className='name'>
                <NavLink to={`/${business.id}`}> 
                {business.title}
                </NavLink>
            </h1>
            </a>
            <li className='description'>
                {business.description}
            </li>
            <li className='location'>
                {business.location}
            </li>
            {/* <div className='Address'>{business.address}</div>
            <div className='City'>{business.city}</div>
            <div className='State'>{business.state}</div>
            <div className='Zip'>{business.zip}</div>
            <div className='Location'>{business.location}</div> */}
        </div>
        ))
    }

    return (
    <div>
        <NewBusinessForm visible={showNewForm} onClose={()=> setShowNewForm(false)} />
        
            <button onClick={()=> setShowNewForm(true)}>
               <div className='new_Gym'> <a>New Gym?</a>
           </div>
           </button>
        
        <>
        </>
        {/* <div className='search_bar'>
            <input className='searchbox' type='text'></input>
        </div> */}
        <div>
            {businessList && businessList}
        </div>
    </div>
    )
}

export default Home