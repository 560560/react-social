import {profileAPI, userAPI} from "../api/api";


const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_USER_STATUS = "SET-USER-STATUS"
const SET_FOLLOW_STATUS = "SET-FOLLOW-STATUS"
const SET_LOADING = "SET-LOADING"

let initialState = {
  profile: null,
  isFollowed: false,
  userStatus: "",
  isLoading: true,
  postsData: [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: "It's my first post", likesCount: 20}

  ]
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      if (!action.postText) return state
      let newPost = {
        id: 3,
        message: action.postText,
        likesCount: 0
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost]
      };
    }
    case SET_USER_PROFILE:
      return {...state, profile: action.profile}
    case SET_USER_STATUS:
      return {...state, userStatus: action.status}
    case SET_FOLLOW_STATUS:
      return {
        ...state,
        isFollowed: action.followStatus
      }
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.loadingStatus
      }
    default : {
      return state;
    }
  }

}
// Action Creators //
export const addPostActionCreater = (postText) => ({type: ADD_POST, postText});

const setUserProfile = (profile) => {
  return {type: SET_USER_PROFILE, profile}
};
const setUserStatus = (status) => {
  return {type: SET_USER_STATUS, status}
}
const setFollowStatus = (followStatus) => {
  return {type: SET_FOLLOW_STATUS, followStatus}
}
const setLoading = (loadingStatus) => {
  return {
    type: SET_LOADING, loadingStatus
  }

}

// Thunk Creators //
export const getUserProfile = (userId) => (dispatch) => {
  dispatch(setLoading(true))
  userAPI.getUserProfile(userId).then(response => {
    dispatch(setUserProfile(response.data))
    dispatch(setLoading(false))
  })
}
export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getUserStatus(userId).then(response => {
    dispatch(setUserStatus(response.data));
  })
}
export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status))

    }

  })
}
export const getFollowStatus = (userId) => (dispatch) => {
  profileAPI.getFollowStatus(userId).then(response => {
    dispatch(setFollowStatus(response.data))
  })

}
export const followFromProfile = (id) => (dispatch) => {
  profileAPI.followFromProfile(id).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setFollowStatus(true))
    }
  })

}
export const unfollowFromProfile = (id) => (dispatch) => {
  profileAPI.unfollowFromProfile(id).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setFollowStatus(false))
    }
  })

}


export default profileReducer;
