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
export const updateCategorySuccess = () => ({
    type: bookTypes.UPDATE_CATEGORY_SUCCESS
})
export const updateCategoryFail = () => ({
    type: bookTypes.UPDATE_CATEGORY_FAIL
})
export const resetCategory = () => ({
    type: bookTypes.RESET_CATEGORY
})
export const addCategory =  (name) => async (dispatch, getState) => {
    dispatch(resetCategory())
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

export const updateCategory =  (id, name) => async (dispatch, getState) => {
    let res
    try {
        res = await axios.post('http://localhost:8080/admin/updatecategory', {
            id: id,
            name: name
        })
    }
    catch(err) {
        dispatch(updateCategoryFail())
        return
    } 
    dispatch(updateCategorySuccess())
    dispatch(getCategory())
}
export const addAuthorSuccess = () =>({
    type: bookTypes.ADD_AUTHOR_SUCCESS
})
export const addAuthorFail = () => ({
    type: bookTypes.ADD_AUTHOR_FAIL
})
export const updateAuthorSuccess = () => ({
    type: bookTypes.UPDATE_AUTHOR_SUCCESS
})
export const updateAuthorFail = () => ({
    type: bookTypes.UPDATE_AUTHOR_FAIL
})
export const resetAuthor = () => ({
    type: bookTypes.RESET_AUTHOR
})
export const addAuthor =  (name) => async (dispatch, getState) => {
    dispatch(resetAuthor())
    let res
    try {
        res = await axios.post('http://localhost:8080/admin/addauthor', {
            name: name
        })
    }
    catch(err) {
        dispatch(addAuthorFail())
        return
    } 
    dispatch(addAuthorSuccess())
    dispatch(getAuthor())
}

export const updateAuthor =  (id, name) => async (dispatch, getState) => {
    let res
    try {
        res = await axios.post('http://localhost:8080/admin/updateauthor', {
            id: id,
            name: name
        })
    }
    catch(err) {
        dispatch(updateAuthorFail())
        return
    } 
    dispatch(updateAuthorSuccess())
    dispatch(getAuthor())
}
export const addPublisherSuccess = () =>({
    type: bookTypes.ADD_PUBLISHER_SUCCESS
})
export const addPublisherFail = () => ({
    type: bookTypes.ADD_PUBLISHER_FAIL
})
export const updatePublisherSuccess = () => ({
    type: bookTypes.UPDATE_PUBLISHER_SUCCESS
})
export const updatePublisherFail = () => ({
    type: bookTypes.UPDATE_PUBLISHER_FAIL
})
export const resetPublisher = () => ({
    type: bookTypes.RESET_PUBLISHER
})
export const addPublisher =  (name) => async (dispatch, getState) => {
    dispatch(resetPublisher())
    let res
    try {
        res = await axios.post('http://localhost:8080/admin/addpublisher', {
            name: name
        })
    }
    catch(err) {
        dispatch(addPublisherFail())
        return
    } 
    dispatch(addPublisherSuccess())
    dispatch(getPublisher())
}

export const updatePublisher =  (id, name) => async (dispatch, getState) => {
    let res
    try {
        res = await axios.post('http://localhost:8080/admin/updatepublisher', {
            id: id,
            name: name
        })
    }
    catch(err) {
        dispatch(updatePublisherFail())
        return
    } 
    dispatch(updatePublisherSuccess())
    dispatch(getPublisher())
}
export const backPage = () => (dispatch, getState) => {
    let page = getState().bookReducers.book.page
    if(page > 1) {
        dispatch(setPage(parseInt(page) - 1))
    }
}

export const nextPage = () => (dispatch, getState) => {
    let page = getState().bookReducers.book.page
    let totalpage = getState().bookReducers.book.totalpage
    if(page < totalpage) {
        dispatch(setPage(parseInt(page) + 1))
    }
}
export const addBookSuccess = () => ({
    type: bookTypes.ADD_BOOK_SUCCESS
})
export const addBookFail = () => ({
    type: bookTypes.ADD_BOOK_FAIL
})
export const updateBookSuccess = () => {
    type: bookTypes.UPDATE_BOOK_SUCCESS
}
export const updateBookFail = () => {
    type: bookTypes.UPDATE_BOOK_FAIL
}
export const addBook = (id_category, name, price, release_date, describe, id_nsx, id_author, file) => async (dispatch, getState) => {
    let data = new FormData()
    data.append('file', file)
    data.append('id_category', id_category) 
    data.append('name', name) 
    data.append('price', price)  
    data.append('release_date', release_date)
    data.append('describe', describe)
    data.append('id_nsx', id_nsx)
    data.append('id_author', id_author)
    let res
    try {
        res = await axios.post('http://localhost:8080/admin/addbook', data)
    }
    catch(err) {
        dispatch(addBookFail())
        return
    } 
    dispatch(addBookSuccess())
    dispatch(getBook())
}