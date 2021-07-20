import { ThunkAction } from "redux-thunk"

const LOAD_BUSINESS = 'businesses/LOAD_BUSINESS'
const loadBusiness = (business) => ({
    type: LOAD_BUSINESS,
    payload: business
})

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
        default: 
            return state
    }
}


export default businessReducer