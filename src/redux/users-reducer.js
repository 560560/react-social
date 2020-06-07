const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const CLEAR_USERS = "CLEAR-USERS"

let initialState = {
  users: []

}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
       return {
        ...state,
        users: state.users.map(u => {
           if (u.id === action.userID) {
            return {...u,  followed: true}
          }
        return u;
        })
        }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    case CLEAR_USERS:
          return {
              ...state,
              users: []
          }
    default:
      return state;

  }
}

export const followActionCreater = (userID) => {
  return {type: FOLLOW, userID: userID}
}
export const unfollowActionCreater = (userID) => {
  return {type: UNFOLLOW, userID: userID}
}
export const setUsersActionCreater = (users) => {
  return {type: SET_USERS, users: users}
}
export const clearUsersActionCreater = () => {
    return {type: CLEAR_USERS}
}


export default usersReducer