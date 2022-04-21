import React from 'react';
import userPhoto from '../../assets/images/images.png';
import style from "./Users.module.css";
import {UsersItemType} from "../../types/entities";
import {NavLink} from 'react-router-dom';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

export type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    changePageHandler: (current: number) => void
    users: Array<UsersItemType>
    onClickFollowHandler: (id: number) => void
    onClickUnFollowHandler: (id: number) => void
    receivedForButton: boolean
    arrUserForButton: number[]
}

export function Users
(
    {
        users,
        arrUserForButton,
        onClickUnFollowHandler,
        onClickFollowHandler,
        totalCount,
        pageSize,
        currentPage,
        changePageHandler,
        ...props
    }: UsersPropsType
) {

    return (
        <div>
            <Paginator totalCount={totalCount} pageSize={pageSize}
                       currentPage={currentPage} changePageHandler={changePageHandler}
            />
            {users.map(u => <User changePageHandler={changePageHandler} onClickFollowHandler={onClickFollowHandler}
                                  onClickUnFollowHandler={onClickUnFollowHandler} arrUserForButton={arrUserForButton}
                                  user={u} key={u.id}/>)}
        </div>
    )
}