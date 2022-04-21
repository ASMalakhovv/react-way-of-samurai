import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/images.png";
import React from "react";
import {UsersPropsType} from "./Users";
import {UsersItemType} from "../../types/entities";

type UserPropsType =
    Pick<UsersPropsType, 'arrUserForButton' | 'onClickUnFollowHandler' | 'onClickFollowHandler' | 'changePageHandler'>
    & { user: UsersItemType }
const User = (
    {
        user,
        arrUserForButton,
        onClickUnFollowHandler,
        onClickFollowHandler,
        ...props
    }: UserPropsType
) => {
    return (
        <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small || userPhoto}
                                 width={'50px'}/>
                                </NavLink>
                        </div>
                        <div>
                            {user.followed ?
                                <button disabled={arrUserForButton.some(id => id === user.id)}
                                        onClick={() => {
                                            onClickUnFollowHandler(user.id)
                                        }}>UnFollow</button>
                                :
                                <button disabled={arrUserForButton.some(id => id === user.id)} onClick={() => {
                                    onClickFollowHandler(user.id)
                                }}>Follow</button>}

                        </div>
                    </span>
            <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>

                    </span>
        </div>
    );
};

export default User;