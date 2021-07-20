import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'ef8a4b9c-1df0-4c77-aba0-118c4d1a37cf'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const UsersAPI = {
    getUsers (carrentPage = null, pageSise = null) {
        return instance.get(`users?page=${carrentPage}&count=${pageSise}`)
        },
    UnFollow (id) {
        return instance.delete(`follow/${id}`)
    },
    Follow (id) {
        return instance.post(`follow/${id}`)
    }
};

export const ProfileAPI = {
    getStatus(peopleID) {
        return instance.get(`profile/status/${peopleID}`)
    },
    getProfile(peopleID) {
        return instance.get(`profile/${peopleID}`)
    
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
    }
};

export const AuthAPI = {
    Auth() {
        return instance.get(`auth/me`)
    },
    Login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    Logout () {
        return instance.delete(`auth/login`)
    }
} 