import axios, {Axios, AxiosResponse} from "axios";
import {AuthMe, FollowDate, ProfileStatus, ProfileUser, UsersStateType} from "../types/entities";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '3d65a9ec-ab43-4f9c-b1c5-2bd296c92ebd'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((res: AxiosResponse<UsersStateType>) => {
                return res.data
            })
    },
    followUser(userID: number) {
        return instance.post(`follow/${userID}`)
            .then((response: AxiosResponse<FollowDate>) => {
                return response.data
            })
    },
    unFollowUser(userID: number) {
        return instance.delete(`follow/${userID}`)
            .then((response: AxiosResponse<FollowDate>) => {
                return response.data
            })
    },
}

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then((response: AxiosResponse<AuthMe>) => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then((response: AxiosResponse<ProfileUser>) => {
                return response.data
            })
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
            .then((response: AxiosResponse<string>) => {
                return response.data
            })
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
            .then((res: AxiosResponse<ProfileStatus>) => {
                return res.data.resultCode
            })
    }
}