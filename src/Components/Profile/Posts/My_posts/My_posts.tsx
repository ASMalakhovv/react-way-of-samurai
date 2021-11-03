import React, {ChangeEvent} from "react";
import s from './My_posts.module.css'
import {Posts} from "../Post";
import {PostsType} from "../../../../Redux/State";


type MyPostsPropsType = {
    posts: PostsType
    addPosts: () => void
    newPostText: string
    updateNewPostText: (changeValue: string) => void
}

export function MyPosts(props: MyPostsPropsType) {

    const onClickPostHandler = () => {
        props.addPosts()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
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

