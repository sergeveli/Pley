import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllBusinesses} from '../../store/businessReducer'
import { useParams } from 'react-router-dom'
import './home.css'

const Home = () => {
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
        <div className='business_container'>
            <div className='avatar'> 
            {/* figure out how to pull gymImg  */}
                <img src='https://pbs.twimg.com/profile_images/1234479930123132929/S9Uzq9W7_400x400.jpg'/>
            </div>
            <h1 className='name'> 
            {/* Link?? to connect to individul business page */}
                {business.title}
            </h1>
            <li className='description'>
                {business.description}
            </li>
            <li className='location'>
                {business.location}
            </li>
            <div className='details'> 
            {/* figure out how to style x size this */}
                <button>
                    <p>DETAILS</p>
                </button>
            </div>
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
        <div className='new_Gym'> 
            {/* figure out how to style x size this */}
            <button>
                <p>New Gym?</p>
            </button>
        </div>
        <div className='Tagline'>
            <p>Make A Pley</p></div>
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