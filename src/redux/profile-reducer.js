import {userAPI} from "../api/api";


const ADD_POST = "ADD-POST";
const UPDATE_TEXTAREA_MY_POSTS_DATA = "UPDATE-TEXTAREA-MY-POSTS-DATA";
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_USER_STATUS = "SET-USER-STATUS"

let initialState = {
    profile: null,
    userStatus: "",
    postTextArea: "",
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 20}

    ]
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_TEXTAREA_MY_POSTS_DATA: {
            return {
                ...state,
                postTextArea: action.messageText
            }
        }
        case ADD_POST: {
            if (state.postTextArea === "") {
                return state;
            }
            let newPost = {
                id: 2,
                message: state.postTextArea,
                likesCount: 0
            };
            return {
                ...state,
                postTextArea: "",
                postsData: [...state.postsData, newPost]
            };
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, userStatus: action.status}
        default : {
            return state;
        }
    }

}

export const addPostActionCreater = () => ({type: ADD_POST});
export const updateTextareaMyPostsDataActionCreater = (messageText) => {
    return {type: UPDATE_TEXTAREA_MY_POSTS_DATA, messageText: messageText}
};
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
};
const setUserStatus = (status) => {
    return {type: SET_USER_STATUS, status}
}


export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))

    })
}

export const getUserStatus = (userId) => (dispatch) => {
    userAPI.getUserStatus(userId).then(response => {
        dispatch(setUserStatus(response.data));

    })
}

export const updateUserStatus = (status) => (dispatch) => {
    userAPI.setNewUserStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))

        }

    })
}

export default profileReducer;
