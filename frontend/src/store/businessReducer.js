import { ThunkAction } from "redux-thunk"
import csrfFetch from "./csrf"

//ACTION TYPES x CREATORS
const LOAD_BUSINESS = 'businesses/LOAD_BUSINESS'
const LOAD_BUSINESSES = 'businesses/LOAD_BUSINESSES'
const NEW_BUSINESS = 'business/ADD_BUSINESS'
const EDIT_BUSINESS = 'business/EDIT_BUSINESS'
const DELETE_BUSINESS = 'businesses/DELETE_BUSINESS'
const ADD_REVIEW = 'review/ADD_REVIEW'
//const EDIT_REVIEW = 

const loadBusiness = (business) => ({
    type: LOAD_BUSINESS,
    payload: business
})

const loadBusinesses = (businesses) =>({
    type: LOAD_BUSINESSES,
    payload: businesses
})

const newBusiness = (business) =>({
    type: NEW_BUSINESS,
    payload: business
})
const deleteBusiness = (business) =>({
    type: DELETE_BUSINESS,
    payload: business
})

const editBusiness = (business) => ({
    type: EDIT_BUSINESS,
    payload: business
})

const addReview = (review) => ({
    type: ADD_REVIEW,
    payload: review
})

//THUNK CREATORS
//(C)
export const addBusiness = (
    ownerId,
    title,
    description,
    address,
    city,
    state,
    zip,
    gymImg) => async(dispatch) => {
        const response = await fetch(`api/business/new`,{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.STRINGIFY({
                ownerId,
                title,
                description,
                address,
                city,
                state,
                zip,
                gymImg            
        })})
        if(response.ok){
            const business = await response.json()
            console.log(business)
            dispatch(newBusiness(business))
        }
}
//(R)
export const getAllBusinesses = () => async(dispatch) =>{
    const response = await fetch('/api/business/')
    if(response.ok){
        const businesses = await response.json()
        console.log(businesses)
        dispatch(loadBusinesses(businesses))
    }
}


export const getSingleBusiness = (businessId) => async(dispatch) => {
    const response = await fetch(`/api/business/${businessId}`)
    if(response.ok){
        const business = await response.json()
        console.log(business)   
        dispatch(loadBusiness(business))   
    }
}

//(U)
export const editSingleBusiness = (businessId) => async(dispatch) =>{
    const response = await fetch(`/api/business/${businessId}`,{
        method: 'PUT',
        headers:{'Content-Type' : 'application/json'},
        body: JSON.stringify(businessId)
    })
    if(response.ok){
    const business = await response.json()
    console.log(business)
    dispatch(editBusiness(business))
    }
}


//(D)
export const deleteSingleBusiness = (businessId) => async(dispatch) => {
    const response = await fetch(`/api/business/${businessId}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(business)
    })
    if(response.ok){}
    const business = await response.json()
    console.log('All Gone')
    dispatch(deleteBusiness(business))

}

export const addSingleReview = (review) => async(dispatch) =>{
    console.log(review)
    const response = await csrfFetch(`/api/business/${review.businessId}/${review.userId}/review/new`, {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.STRINGIFY(review)            
        })
        console.log(review)
        if(response.ok){
            const newReview = await response.json()
            dispatch(addReview(newReview))
            return newReview
        }
}







// when im adding a review..make a copy of the state then, find the business being updated(businessId) 
// const reviews = newState[businessId].Reviews 
// reviews.push(action.payload)



//INITIAL STATE
const initialState = {allBusiness:null, singleBusiness:null}


//REDUCERS
const businessReducer = (state = initialState, action)=>{
    switch(action.type){
        case NEW_BUSINESS:{
            return {
                ...state,
                newBusiness: action.payload
            }
        }
        case LOAD_BUSINESS:{
            return {
            ...state,
            singleBusiness: action.payload
            }
        }
        case LOAD_BUSINESSES:{
            return {
                ...state,
                allBusiness: action.payload
            }
        }
        case EDIT_BUSINESS:{
            return {
                ...state,
                singleBusiness: action.payload
            }
        }
        case DELETE_BUSINESS:{
            return {
                ...state,
                singleBusiness: action.payload
            }
        }
        default: 
            return state
    }
}


export default businessReducer