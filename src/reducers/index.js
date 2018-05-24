import { combineReducers } from 'redux'
import bookReducers from './book.reducer'
import userReducers from './user.reducer'
export default combineReducers({
    bookReducers,
    userReducers
})