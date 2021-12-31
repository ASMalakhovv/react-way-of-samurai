import axios, {AxiosResponse} from "axios";
import {UsersStateType} from "../types/entities";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '3d65a9ec-ab43-4f9c-b1c5-2bd296c92ebd'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then((res: AxiosResponse<UsersStateType>) => {
            return res.data
        })
}