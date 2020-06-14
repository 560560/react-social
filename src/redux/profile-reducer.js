import {userAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_TEXTAREA_MY_POSTS_DATA = "UPDATE-TEXTAREA-MY-POSTS-DATA";
const SET_USER_PROFILE = "SET-USER-PROFILE"

let initialState = {
    profile: null,
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

export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))

    })
}

export default profileReducer;
