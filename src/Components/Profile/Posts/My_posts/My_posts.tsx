import React, {ChangeEvent} from "react";
import s from './My_posts.module.css'
import {Posts} from "../Post";
import {ActionType, PostsType,addNewPostActionCreator,updateNewPostTextActionCreator } from "../../../../Redux/State";


type MyPostsPropsType = {
    posts: PostsType
    newPostText: string
    dispatch:(action:ActionType) => void
}

export function MyPosts(props: MyPostsPropsType) {




    const onClickPostHandler = () => {
        props.dispatch(addNewPostActionCreator())
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
    }

    const postsElements = props.posts.map(p => <Posts message={p.message} like={p.like}/>)
    return (
        <div className={s.myPosts}>
            <div>
                <div>
                    <h3>My posts</h3>
                    <textarea value={props.newPostText}
                              onChange={onChangeHandler}></textarea>
                </div>
                <div>
                    <button onClick={onClickPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

