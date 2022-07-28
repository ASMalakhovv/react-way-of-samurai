import React from 'react';
import {UsersItemType} from "../../types/entities";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UsersSearchForm} from "./UsersSearchForm";

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
            <UsersSearchForm/>
            <Paginator totalCount={totalCount} pageSize={pageSize}
                       currentPage={currentPage} changePageHandler={changePageHandler}
            />
            {users.map(u => <User changePageHandler={changePageHandler} onClickFollowHandler={onClickFollowHandler}
                                  onClickUnFollowHandler={onClickUnFollowHandler} arrUserForButton={arrUserForButton}
                                  user={u} key={u.id}/>)}
        </div>
    )
}


