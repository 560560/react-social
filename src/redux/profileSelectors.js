export const getProfileSelector = (state) => {
    return state.profilePage.profile
}

export const getIdSelector = (state) => {
    return state.auth.id
}

export const getUserStatusSelector = (state) => {
    return state.profilePage.userStatus
}

export const getFollowedStatusSelector = (state) => {
    return state.profilePage.isFollowed
}

export const getLoadingStatusSelector = (state) => {
    return state.profilePage.isLoading
}

export const getPostsDataSelector = (state) => {
    return state.profilePage.postsData
}