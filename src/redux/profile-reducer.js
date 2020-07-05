import {profileAPI, userAPI} from "../api/api";


const ADD_POST = "profile-reducer/ADD-POST";
const SET_USER_PROFILE = "profile-reducer/SET-USER-PROFILE"
const SET_USER_STATUS = "profile-reducer/SET-USER-STATUS"
const SET_FOLLOW_STATUS = "profile-reducer/SET-FOLLOW-STATUS"
const SET_LOADING = "profile-reducer/SET-LOADING"
const SAVE_PHOTO_SUCCESS = "profile-reducer/SAVE-PHOTO-SUCCESS"
const SET_OPEN_ADD_PHOTO_STATUS = "profile-reducer/SET-OPEN-ADD-PHOTO-STATUS"


let initialState = {
    profile: null,
    isFollowed: false,
    userStatus: "",
    isOpen: false,
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
        case SET_OPEN_ADD_PHOTO_STATUS:
            return {
                ...state,
                isOpen: action.isOpen
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
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
export const setIsOpen = (isOpen) => {
    return {type: SET_OPEN_ADD_PHOTO_STATUS, isOpen}
}
const savePhotoSuccess = (photos) => {
    return {type: SAVE_PHOTO_SUCCESS, photos}
}


// Thunk Creators //
export const getUserProfile = (userId) => async (dispatch) => {
    dispatch(setLoading(true))
    let response = await userAPI.getUserProfile(userId);
    dispatch(setUserProfile(response.data))
    dispatch(setLoading(false))

}
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(response.data));

}
export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
}
export const getFollowStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getFollowStatus(userId);
        dispatch(setFollowStatus(response.data))
}
export const followFromProfile = (id) => async (dispatch) => {
    let response = await profileAPI.followFromProfile(id);
        if (response.data.resultCode === 0) {
            dispatch(setFollowStatus(true))
        }
}
export const unfollowFromProfile = (id) => async (dispatch) => {
    let response = await profileAPI.unfollowFromProfile(id);
        if (response.data.resultCode === 0) {
            dispatch(setFollowStatus(false))
        }
}
export const savePhoto = (photo) => async (dispatch) => {
    let response = await profileAPI.savePhoto(photo);
    if (response.data.resultCode === 0) {
        dispatch (savePhotoSuccess(response.data.data.photos))
        dispatch(setIsOpen(false))
    }


}


export default profileReducer;
