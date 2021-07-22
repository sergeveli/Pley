import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllBusinesses} from '../../store/businessReducer'
import { useParams } from 'react-router-dom'

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
            <div className='Name'>{business.title}</div>
            <div className='Description'>{business.description}</div>
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