import * as axios from "axios";


let instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "190bf90d-6cb7-4e1b-8685-f3cf49bb2a17"}
});


export const userAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize} &page=${currentPage}`)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`, {})
    },
    unFollow(id, apiKey = "190bf90d-6cb7-4e1b-8685-f3cf49bb2a17") {
        return instance.delete(`follow/${id}`)
    },
    authorization() {
        return instance.get(`auth/me`).then(response => response.data)
    }

}
