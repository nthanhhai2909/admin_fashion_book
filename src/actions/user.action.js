import axios from 'axios'
import { userTypes } from '../constants/action.types'
export const setUser = (data) => ({
    type: userTypes.SET_USER,
    data
})
export const getUser = () => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/admin/getAllUser')
    }
    catch (err) {
        console.log(err)
        return
    }
    dispatch(setUser(res.data.data))
}