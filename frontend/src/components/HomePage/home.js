import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllBusinesses} from '../../store/businessReducer'
import { useParams } from 'react-router-dom'

const Home = () => {
    const dispatch = useDispatch();
    const { businessId } = useParams();
    const businesses = useSelector((state)=>Object.values(state.getAllBusinesses))
    console.log(businesses)

    useEffect(() => {
        dispatch(getAllBusinesses(businessId))
    },[dispatch])

    return (
        <div className='Tagline'>
            <p>Let's Pley</p></div>,
        <div className='search_bar'>
            <input className='searchbox' type='text'></input>
        </div>
    )
}

export default Home