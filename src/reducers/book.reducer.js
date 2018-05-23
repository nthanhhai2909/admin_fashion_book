import { bookTypes } from '../constants/action.types'
import { combineReducers } from 'redux'
const category = (state = { data: [] }, action) => {
    switch (action.type) {
        case bookTypes.SET_CATEGORY_BOOK: {
            return {
                ...state,
                data: action.data
            }
        }
        default: return state
    }
}
const publisher = (state = { data: [] }, action) => {
    switch (action.type) {
        case bookTypes.SET_PUBLISHSER: {
            return {
                ...state,
                data: action.data
            }
        }
        default: return state
    }
}
const author = (state = {data: []}, action) => {
    switch(action.type) {
        case bookTypes.SET_AUTHOR: {
            return {
                ...state,
                data: action.data
            }
        }
        default: return state
    }
}
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
    category,
    publisher,
    book, 
    author
})