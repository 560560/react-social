import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"
const LOGINING = "LOGINING"
const AUTH_WRONG = "AUTH-WRONG"

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    wrongAuth: false
}


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        case LOGINING:
            return {...state, isAuth: action.isAuth}
        case AUTH_WRONG:
            return {...state, wrongAuth: action.wasError}
        default:
            return state
    }


}
// Action Creators //
const setAuthUserData = (data) => ({type: SET_USER_DATA, data})
const logining = (isAuth) => ({type: LOGINING, isAuth})
const authError = (wasError) => ({type: AUTH_WRONG, wasError})



// Thunk Creators //
export const authorization = () => (dispatch) => {
    authAPI.me().then(response => response.data).then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(response.data));
        }
    })
}
export const loginMe = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch (logining(true))
            dispatch(authError(false))
            authAPI.me().then(response => response.data).then(response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthUserData(response.data));
                }
            })
        }
        if(response.data.resultCode === 1) {
            dispatch(authError(true))
        }
    })
}
export const loginOut= () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch (logining(false))
            authAPI.me().then(response => response.data).then(response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthUserData(response.data));
                }
            })
        }
    })
}


export default authReducer