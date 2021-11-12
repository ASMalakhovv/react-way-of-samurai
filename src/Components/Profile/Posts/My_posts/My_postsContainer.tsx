import React, {ChangeEvent} from "react";
import s from './My_posts.module.css'
import {Posts} from "../Post";
import {ActionType, PostsType, ProfilePageType} from "../../../../Redux/Store";
import { addNewPostActionCreator, updateNewPostTextActionCreator } from "../../../../Redux/profile-reducer";
import { MyPosts } from "./My_posts";


type MyPostsPropsType = {
    posts: ProfilePageType
    dispatch:(action:ActionType) => void
}

export function MyPostsContainer(props: MyPostsPropsType) {

    const onClickPostHandler = () => {
        props.dispatch(addNewPostActionCreator())
    }

    const onChangeHandler = (text:string) => {
        props.dispatch(updateNewPostTextActionCreator(text))
    }


    return (
        <MyPosts onClickPostHandler={onClickPostHandler}
                 onChangeHandler={onChangeHandler}
                 posts={props.posts.posts}
                 newPostText={props.posts.newPostText}
        />
    )
}

