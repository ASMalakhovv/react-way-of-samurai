import React from 'react';
import userPhoto from '../../assets/images/images.png';
import style from "./Users.module.css";
import {FollowDate, UsersItemType, UsersStateType} from "../../types/entities";
import {NavLink} from 'react-router-dom';
import axios, {AxiosResponse} from "axios";

export type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    changePageHandler: (current: number) => void
    users: Array<UsersItemType>
    onClickFollowHandler: (id: number) => void
    onClickUnFollowHandler: (id: number) => void
}

export function Users(props: UsersPropsType) {


    let numberPages: number = Math.ceil((props.totalCount - 16300) / props.pageSize)
    let arrayPages: number[] = [];
    for (let i = 1; i <= numberPages; i++) {
        arrayPages.push(i)
    }


    return (
        <div>
            <div>
                {arrayPages.map(n => {
                        return (
                            <span className={props.currentPage === n ? style.number : ""}
                                  onClick={() => props.changePageHandler(n)}>{n}</span>
                        )
                    }
                )}
            </div>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small || userPhoto}
                                 width={'50px'}/>
                                </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": '3d65a9ec-ab43-4f9c-b1c5-2bd296c92ebd'
                                        }
                                    })
                                        .then((response: AxiosResponse<FollowDate>) => {
                                            if (response.data.resultCode === 0) {
                                                props.onClickUnFollowHandler(u.id)
                                            }
                                        })
                                }}>UnFollow</button> :
                                <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": '3d65a9ec-ab43-4f9c-b1c5-2bd296c92ebd'
                                        }
                                    })
                                        .then((response: AxiosResponse<FollowDate>) => {
                                            if (response.data.resultCode === 0) {
                                                props.onClickFollowHandler(u.id)
                                            }
                                        })
                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>

                    </span>
                </div>)}
        </div>
    )
}