import axios, {AxiosResponse} from "axios";
import React from "react";
import userPhoto from '../../assets/images/images.png'
import {UsersStateType} from "../../types/entities";
import {UsersPropsType} from "./UsersContainer";
import style from './Users.module.css'

class UsersC extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response: AxiosResponse<UsersStateType>) => {
                let users = response.data.items
                this.props.onClickSetUsersHandler(users)
            })
    }

    render() {
        return (
            <div>
                <div>
                    <span className={style.number}>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
                {this.props.users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small || userPhoto}
                                 width={'50px'}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => this.props.onClickUnFollowHandler(u.id)}>Follow</button> :
                                <button onClick={() => this.props.onClickFollowHandler(u.id)}>UnFollow</button>}

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
}

export default UsersC