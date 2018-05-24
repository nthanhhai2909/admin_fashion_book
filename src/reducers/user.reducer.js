import { userTypes } from '../constants/action.types'
import { combineReducers } from 'redux'
const user = (state = {
    data: []
}, action) => {
    switch(action.type){
        case userTypes.SET_USER: {
            return {
                ...state, 
                data: action.data
            }
        }
        default: return state
    }
}
export default combineReducers({
    user
})