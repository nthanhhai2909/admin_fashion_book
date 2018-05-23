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
export const deleteBook = (id) => async(dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/admin/deletebook/' +id)
    }
    catch (err) {
        console.log(err)
        return
    }
    console.log(res)
    dispatch(getBook())
}

export const getCategory = () => async (dispatch, getState) =>  {
    let res
    try {
        res = await axios.get('http://localhost:8080/category/all')
    }
    catch (err) {
        return
    }
    dispatch(setCategory(res.data.data))
}

export const getPublisher = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/publisher/all')
    }
    catch (err) {
        return
    }
    dispatch(setPublisher(res.data.data))
}

export const getAuthor = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/author/all')
    }
    catch(err) {
        return
    }
    dispatch(setAuthor(res.data.data))
}

export const setCategory = (data) => ({
    type: bookTypes.SET_CATEGORY_BOOK,
    data
})

export const setPublisher = (data) => ({
    type: bookTypes.SET_PUBLISHSER,
    data
})

export const setAuthor = (data) => ({
    type: bookTypes.SET_AUTHOR,
    data
})
export const addCategorySuccess = () =>({
    type: bookTypes.ADD_CATEGORY_SUCCESS
})
export const addCategotyFail = () => ({
    type: bookTypes.ADD_CATEGORY_FAIL
})
export const addCategory =  (name) => async (dispatch, getState) => {
    let res
    try {
        res = await axios.post('http://localhost:8080/admin/addcategory', {
            name: name
        })
    }
    catch(err) {
        dispatch(addCategotyFail())
        return
    } 
    dispatch(addCategorySuccess())
    dispatch(getCategory())
}