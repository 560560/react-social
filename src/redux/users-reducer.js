const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const CLEAR_USERS = "CLEAR-USERS"
const SET_USERS_COUNT = "SET-USERS-COUNT"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

let initialState = {
    users: [],
    pages: [
        {id: 1, pageNumber: 1}
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true

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
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            }
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

        default:
            return state;

    }
}

export const followTo = (userID) => ({type: FOLLOW, userID})
export const unfollowFrom = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const clearUsers = () => ({type: CLEAR_USERS})
export const setUsersCount = (users) => ({type: SET_USERS_COUNT, users})
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer