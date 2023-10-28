import axios from "axios";

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY' : '51dcd19b-ecdb-4fba-82fc-a680bf8e7c9b'
    }})
export const userIPI = {
    getUsers (pageNumber: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${pageNumber}&count=${ pageSize }`,{
        }).then(response=>response.data)}
}
// export const getUsers = (pageNumber: number = 1, pageSize: number = 10) => {
//     return instance.get(`users?page=${pageNumber}&count=${ pageSize }`,{
//         })
//             .then(response=>response.data)}

export const deleteUser = (userID: number) => {
  return(
      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`, {
          withCredentials: true,
          headers: {
              'API-KEY' : '51dcd19b-ecdb-4fba-82fc-a680bf8e7c9b'
          }
      }).then(response => (response.data))
  )
}

export const addUser = (userID: number) => {
    return(
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`, {} , {
            withCredentials: true,
            headers: {
                'API-KEY' : '51dcd19b-ecdb-4fba-82fc-a680bf8e7c9b'
            }
        }).then(response => response.data)
    )
}
