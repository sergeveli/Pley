import { ThunkAction } from "redux-thunk"

const LOAD_BUSINESS = 'businesses/LOAD_BUSINESS'
const LOAD_BUSINESSES = 'businesses/LOAD_BUSINESSES'

const loadBusiness = (business) => ({
    type: LOAD_BUSINESS,
    payload: business
})

const loadBusinesses = (businesses) =>({
    type: LOAD_BUSINESSES,
    payload: businesses
})
export const getAllBusinesses = () => async(dispatch) =>{
    const response = await fetch('/api/businesses')
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
const initialState = {allBusiness:null, singleBusiness:null}

const businessReducer = (state = initialState, action)=>{
    switch(action.type){
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
        default: 
            return state
    }
}


export default businessReducer