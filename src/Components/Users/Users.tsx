import axios from 'axios';
import {AxiosResponse} from 'axios';
import React from 'react';
import {v1} from 'uuid';
import {UsersPropsType} from './UsersContainer';
import userPhoto from '../../assets/images/images.png'
import { UsersStateType } from '../../types/entities';


export function Users(props: UsersPropsType) {
    const getUser = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then((response: AxiosResponse<UsersStateType>) => {
                    debugger
                    let users = response.data.items
                    props.onClickSetUsersHandler(users)
                })
            /*props.onClickSetUsersHandler([{
                    id: v1(),
                    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqF1A-aVPO9c2a0eogj2k_SUsLPqiM1CciEA&usqp=CAU",
                    fullName: "Aleksandr",
                    followed: true,
                    status: "I am happy",
                    location: {city: "Omsk", country: "Russia"}
                },
                {
                    id: v1(),
                    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JtDCsJCCd8PIYySEMcIgkN7wmDwLUNPCBg&usqp=CAU",
                    fullName: "Dmitry",
                    followed: false,
                    status: "Hello world",
                    location: {city: "Omsk", country: "Russia"}
                },
                {
                    id: v1(),
                    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgT9Tjg9qTirti-TR4763fWWVblKJhaBGfCQ&usqp=CAU",
                    fullName: "Dimych",
                    followed: true,
                    status: "I am teacher",
                    location: {city: "Minsk", country: "Belarus"}
                }
            ])*/
        }
    }
    let user = props.users.map( u =>
        <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small || userPhoto}
                                 width={'50px'}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => props.onClickUnFollowHandler(u.id)}>Follow</button> :
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
        </div>)
    return (
        <div>
            <button onClick={getUser}>Get User</button>
            {user}
        </div>
    )
}