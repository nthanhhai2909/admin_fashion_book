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
export const deleteUser = (email) => async (dispatch, getState) => {
    let res
    try {
        res = await axios.get('http://localhost:8080/admin/deleteuser/' + email)
    }
    catch (err) {
        console.log(err)
        return
    }
    dispatch(getUser())
}
export const addUserSuccess = () => ({
    type: userTypes.ADD_USER_SUCCESS
})
export const addUserFail = () => ({
    type: userTypes.ADD_USER_FAIL
})
export const updateUserSuccess = () => ({
    type: userTypes.UPDATE_USER_SUCCESS
})
export const updateUserFail = () => ({
    type: userTypes.UPDATE_USER_FAIL
})
export const resetUser = () => ({
    type: userTypes.RESET_USER
})
export const addUser = (email, password, firstName , lastName, address, phone_number, is_admin) => async (dispatch, getState) => {
    dispatch(resetUser())
    let res
    try {
        res = await axios.post('http://localhost:8080/admin/adduser', {
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password,
            address: address,
            phone_number: phone_number,
            is_admin: is_admin
        })
    }
    catch (err) {
        console.log(err)
        dispatch(addUserFail())
        return
    }
    dispatch(addUserSuccess())
    dispatch(getUser())
}
export const updateUser = (email, firstName, lastName, address, phone_number, is_admin) => async (dispatch, getState) => {
    let res
    try {
        res = await axios.post('http://localhost:8080/admin/updateuser', {
            email: email,
            firstName: firstName,
            lastName: lastName,
            address: address,
            phone_number: phone_number,
            is_admin: is_admin
        })
    }
    catch (err) {
        console.log(err)
        dispatch(updateUserFail())
        return
    }
    dispatch(updateUserSuccess())
    dispatch(getUser())
}