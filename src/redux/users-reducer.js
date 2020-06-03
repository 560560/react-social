const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"

let initialState = {
  users: [
    {id: 1, userAvatar: "http://9878621572.myjino.ru/img/ava_1.jpg", fullName: "Dmitry", status: "I'm a boss", location: {country: "Belarus", city: "Minsk"}, isFriend: true},
    {id: 2, userAvatar: "http://9878621572.myjino.ru/img/ava_2.jpg", fullName: "Svetlana", status: "I'm so pretty", location: {country: "Belarus", city: "Minsk"}, isFriend: true},
    {id: 3, userAvatar: "http://9878621572.myjino.ru/img/ava_3.jpg", fullName: "Anton", status: "Training", location: {country: "Russia", city: "Orenburg"}, isFriend: false},
    {id: 4, userAvatar: "http://9878621572.myjino.ru/img/ava_4.jpg", fullName: "Alexey", status: "", location: {country: "Kazakhstan", city: "Aqtobe"}, isFriend: false}]

}
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
       return {
        ...state,
        users: state.users.map(u => {
           if (u.id === action.userID) {
            return {...u,  isFriend: true}
          }
        return u;
        })
        }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return {...u, isFriend: false}
          }
          return u;
        })
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


export default usersReducer