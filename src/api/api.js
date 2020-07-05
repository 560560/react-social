import * as axios from "axios";


let instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "190bf90d-6cb7-4e1b-8685-f3cf49bb2a17"}
});


export const userAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize} &page=${currentPage}`)
    },
    follow(id) {
        return instance.post(`follow/${id}`, {})
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)
    },
    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}


export const profileAPI = {
    getUserStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put('/profile/status', {status: status})
    },
    getFollowStatus(userId) {
        return instance.get(`/follow/${userId}`)
    },
    followFromProfile(id) {
        return instance.post(`follow/${id}`, {})
    },
    unfollowFromProfile(id) {
        return instance.delete(`follow/${id}`)
    },

    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append("image", photoFile.Avatar)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

}