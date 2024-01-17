import axios from "axios";

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY' : 'c39f7650-4219-4ca8-8a57-6493d2b385c4'
    }})
export const userAPI = {
    getUsers (pageNumber: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${pageNumber}&count=${ pageSize }`)
            .then(response=>response.data)},
    followSuccess (userID: number) {
        return instance.post(`follow/${userID}`, {} )
            .then(response => (response.data)
            )
    },
    unFollowSuccess (userID: number) {
        return instance.delete(`follow/${userID}`)
            .then(response => (response.data)
            )
    },
    getProfile (userId : number = 2) {
        return instance.get(`profile/${userId}`)
    }
}
export const authAPI  = {
    me () {
        return instance.get( `auth/me/`)
    }
}

export const headerAPI = {
    getHeaderSuccess () {
        return instance.get( `https://social-network.samuraijs.com/api/1.0/auth/me/`)
            .then(response  => (response.data)
     )
    }
}
// export const getUsers = (pageNumber: number = 1, pageSize: number = 10) => {
//     return instance.get(`users?page=${pageNumber}&count=${ pageSize }`,{
//         })
// //             .then(response=>response.data)}
