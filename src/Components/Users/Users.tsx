import React from 'react';
import userPhoto from '../../assets/images/images.png';
import style from "./Users.module.css";
import {UsersItemType} from "../../types/entities";
import {NavLink} from 'react-router-dom';

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
                                <button onClick={() => props.onClickUnFollowHandler(u.id)}>Follow</button> :
                                <button onClick={() => props.onClickFollowHandler(u.id)}>UnFollow</button>}

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