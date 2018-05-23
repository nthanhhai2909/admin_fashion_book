import axios from 'axios'
import { bookTypes } from '../constants/action.types'
export const getBook = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.post('http://localhost:8080/book/allbook', {
            page: getState().bookReducers.book.page,
            range: null
        })
    }
    catch (err) {
        console.log(err)
        return
    }
    dispatch(setBook(res.data.data))
    dispatch(setTotalPage(res.data.totalPage))
}
export const setBook = (data) => ({
    type: bookTypes.SET_BOOK,
    data
})
export const setPage = (page) => ({
    type: bookTypes.SET_PAGE,
    page
})
export const setTotalPage = (totalpage) => ({
    type: bookTypes.SET_TOTAL_PAGE,
    totalpage
})