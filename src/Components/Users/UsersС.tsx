import axios, {AxiosResponse} from "axios";
import React from "react";
import userPhoto from '../../assets/images/images.png'
import {UsersStateType} from "../../types/entities";
import {UsersPropsType} from "./UsersContainer";
import style from './Users.module.css'

class UsersC extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse<UsersStateType>) => {
                let users = response.data.items
                this.props.onClickSetUsersHandler(users)
            })
    }

    changePageHandler = (current: number) => {
        this.props.onClickSetCurrentPage(current)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${current}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse<UsersStateType>) => {
                let users = response.data.items
                this.props.onClickSetUsersHandler(users)
            })
    }

    render() {
        let numberPages: number = Math.ceil(this.props.totalCount / this.props.pageSize)
        let arrayPages: number[] = [];
        for (let i = 1; i <= numberPages; i++) {
            arrayPages.push(i)
        }

        return (
            <div>
                <div>
                    {arrayPages.map(n => {
                            return (
                                <span className={this.props.currentPage === n ? style.number : ""}
                                      onClick={() => this.changePageHandler(n)}>{n}</span>
                            )
                        }
                    )}
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