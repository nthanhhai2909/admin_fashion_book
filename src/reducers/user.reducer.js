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
        case userTypes.ADD_USER_SUCCESS: {
            return {
                ...state,
                isadd: true
            }
        }
        case userTypes.ADD_USER_FAIL: {
            return {
                ...state,
                isadd: false
            }
        }
        case userTypes.UPDATE_USER_SUCCESS: {
            return {
                ...state,
                isupdate: true
            }
        }
        case userTypes.UPDATE_USER_SUCCESS: {
            return {
                ...state,
                isupdate: false
            }
        }
        case userTypes.RESET_USER: {
            return {
                ...state,
                isadd: null,
                isupdate: null
            }
        }
        default: return state
    }
}
export default combineReducers({
    user
})