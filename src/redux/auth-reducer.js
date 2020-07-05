import {authAPI, userAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"
const LOGINING = "LOGINING"
const AUTH_WRONG = "AUTH-WRONG"
const LOGOUT_CLEAR_ID ="LOGOUT-CLEAR-ID"

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    wrongAuth: false,
    errorMessage: ""
}


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        case LOGINING:
            return {...state, isAuth: action.isAuth}
        case AUTH_WRONG:
            return {...state, wrongAuth: action.wasError, errorMessage: action.errorMessage}
        case LOGOUT_CLEAR_ID:
            return {...state, id: null, email: null, login: null}
        default:
            return state
    }


}
// Action Creators //
const setAuthUserData = (data) => ({type: SET_USER_DATA, data})
const logining = (isAuth) => ({type: LOGINING, isAuth})
const authError = (wasError, errorMessage) => ({type: AUTH_WRONG, wasError, errorMessage})
const clearId = () => ({type:LOGOUT_CLEAR_ID})


// Thunk Creators //
export const authorization = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(response.data.data));
    }


}
export const loginMe = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(logining(true))
        dispatch(authError(false))
        response = await authAPI.me()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(response.data.data));
        }

    }
    if (response.data.resultCode === 1) {
        dispatch(authError(true, response.data.messages[0]))
    }

}
export const loginOut = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(logining(false))
        dispatch(clearId())
        response = await authAPI.me()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(response.data.data));
        }


    }

}


export default authReducer