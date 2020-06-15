import {userAPI} from "../api/api";
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_USERS_COUNT = "SET-USERS-COUNT"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS"

let initialState = {
    users: [],
    pages: [
        {id: 1, pageNumber: 1}
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
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
            return {...state, users: [...action.users]}
        case SET_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.users}
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber}
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id) }

        default:
            return state;

    }
}
// Action Creators //
export const followTo = (userID) => ({type: FOLLOW, userID})
export const unfollowFrom = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setUsersCount = (users) => ({type: SET_USERS_COUNT, users})
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (isFetching, id) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id})

// Thunk Creators //
export const getUsers = (pageSize, currentPage) => (dispatch) => {
    dispatch (toggleIsFetching(true));
    userAPI.getUsers(pageSize, currentPage)
        .then(response => response.data)
        .then(data => {
            dispatch (toggleIsFetching(false));
            dispatch (setUsers(data.items));
            dispatch (setUsersCount(data.totalCount));
        })
}
export const unfollow = (id) => (dispatch) => {
    dispatch (toggleIsFollowingProgress(true, id))
    userAPI.unFollow(id).then(response => {
        if (response.data.resultCode === 0) {
            dispatch (unfollowFrom(id))
        }
        dispatch (toggleIsFollowingProgress(false, id))
    })

}
export const follow = (id) => (dispatch) => {
    dispatch (toggleIsFollowingProgress(true, id))
    userAPI.follow(id).then(response => {
        if (response.data.resultCode === 0) {
            dispatch (followTo(id))
        }
        dispatch (toggleIsFollowingProgress(false, id))
    })

}


export default usersReducer