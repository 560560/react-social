import {authAPI} from "../api/api";
import {setUserProfile} from "./profile-reducer";

const SET_USER_DATA = "auth-reducer/SET_USER_DATA"
const LOGINING = "auth-reducer/LOGINING"
const AUTH_WRONG = "auth-reducer/AUTH-WRONG"
const LOGOUT_CLEAR_ID ="auth-reducer/LOGOUT-CLEAR-ID"
const IS_LOGINING ="auth-reducer/IS-LOGINING"

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    wrongAuth: false,
    errorMessage: "",
    isLogining: false
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
        case IS_LOGINING:
            return {...state, isLogining: action.isLogining}
        default:
            return state
    }


}
// Action Creators //
const setAuthUserData = (data) => ({type: SET_USER_DATA, data})
const logining = (isAuth) => ({type: LOGINING, isAuth})
const authError = (wasError, errorMessage) => ({type: AUTH_WRONG, wasError, errorMessage})
const clearId = () => ({type:LOGOUT_CLEAR_ID})
const setIsLogining = (isLogining) => ({type:IS_LOGINING, isLogining})


// Thunk Creators //
export const authorization = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(response.data.data));
    }


}
export const loginMe = (email, password, rememberMe) => async (dispatch) => {
    dispatch(setIsLogining(true))
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(logining(true))
        dispatch(authError(false))
        response = await authAPI.me()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(response.data.data));
            dispatch(setIsLogining(false))
        }

    }
    if (response.data.resultCode === 1) {
        dispatch(authError(true, response.data.messages[0]))
        dispatch(setIsLogining(false))
    }

}
export const loginOut = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(logining(false))
        dispatch(clearId())
        dispatch(setUserProfile(null))
        response = await authAPI.me()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(response.data.data));
        }


    }

}


export default authReducer