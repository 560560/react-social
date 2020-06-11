import * as axios from "axios";

export const getUsers = (pageSize, currentPage) => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize} &page=${currentPage}`,
    {
      withCredentials: true
    }).then(response => response.data)
}
export const follow = (id, apiKey = "190bf90d-6cb7-4e1b-8685-f3cf49bb2a17") => {
  return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
    withCredentials: true,
    headers: {
      "API-KEY": apiKey
    }})

}
export const unFollow = (id, apiKey = "190bf90d-6cb7-4e1b-8685-f3cf49bb2a17") => {
  return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
    withCredentials: true,
    headers: {
      "API-KEY": apiKey
    }})

}
export const authorization = () => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    withCredentials: true
  }).then(response => response.data)
}