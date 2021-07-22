import React, {useEffect} from 'react'
import  { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {getSingleBusiness} from '../../store/businessReducer'


const BusinessPage = () =>{
const dispatch = useDispatch();
const { businessId } = useParams();

const business = useSelector(state => state.business.singleBusiness);

useEffect(()=> {
     dispatch(getSingleBusiness(businessId)) //figure out how to make this dynamic.business.map for allBusiness
 },[dispatch])

    return (
        <div>
            {business && 
            <div>{business.title}</div>} 
        </div>

    )
}


export default BusinessPage;