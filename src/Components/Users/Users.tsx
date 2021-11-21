import React from 'react';
import { v1 } from 'uuid';
import {UsersPropsType} from './UsersContainer';


export function Users(props: UsersPropsType) {
    debugger
    if(props.users.length === 0) {
        props.onClickSetUsersHandler([{
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
        ])
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photo} width={'50px'}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={()=>props.onClickUnFollowHandler(u.id)}>Follow</button> :
                                <button onClick={()=>props.onClickFollowHandler(u.id)}>UnFollow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>

                    </span>
                </div>)
            }
        </div>
    )
}