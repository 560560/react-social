import {authorization} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS"

let initialState = {
  initialized: false
}


const appReducer = (state = initialState, action) => {

  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }


}
// Action Creators //
const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {

  let promise = dispatch(authorization());
  Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccess());
    })


}

// Thunk Creators //


export default appReducer