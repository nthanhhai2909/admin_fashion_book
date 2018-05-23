import { bookTypes } from '../constants/action.types'
import { combineReducers } from 'redux'
const book = (state = {
    data: [], page: 1, totalpage: null
}, action) => {
    switch(action.type){
        case bookTypes.SET_BOOK: {
            return {
                ...state, 
                data: action.data
            }
        }
        case bookTypes.SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case bookTypes.SET_TOTAL_PAGE: {
            return {
                ...state,
                totalpage: action.totalpage
            }
        }
        default: return state
    }
}
export default combineReducers({
    book
})