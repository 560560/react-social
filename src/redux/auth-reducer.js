import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"
const LOGINING = "LOGINING"

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        case LOGINING:
            return {...state, isAuth: action.isAuth}
        default:
            return state
    }


}
// Action Creators //
const setAuthUserData = (data) => ({type: SET_USER_DATA, data})
const logining = (isAuth) => ({type: LOGINING, isAuth})

// Thunk Creators //
export const authorization = () => (dispatch) => {
    authAPI.me().then(response => response.data).then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(response.data));
        }
    })
}
export const loginMe = (loginObject) => (dispatch) => {
    console.log(loginObject)
    authAPI.login(loginObject).then(response => {
        if (response.data.resultCode === 0) {
            dispatch (logining(true))
            authAPI.me().then(response => response.data).then(response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthUserData(response.data));
                }
            })

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