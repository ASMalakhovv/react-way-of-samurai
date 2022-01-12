import axios, {AxiosResponse} from "axios";
import {AuthMe, FollowDate, ProfileUser, UsersStateType} from "../types/entities";

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

export const headerAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then((response: AxiosResponse<AuthMe>) => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userId:string) {
        return instance.get(`profile/${userId}`)
            .then((response: AxiosResponse<ProfileUser>) => {
                return response.data
            })
    }
}