import React, {ChangeEvent} from "react";
import s from './My_posts.module.css'
import {Posts} from "../Post";
import {addNewPostActionCreator, PostsType, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import { MyPostPropsType } from "./My_postsContainer";


export function MyPosts(props: MyPostPropsType) {
    debugger;
    const onClickPostHandler = () => {
        props.onClickPostHandler();
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.onChangeHandler(text)
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

