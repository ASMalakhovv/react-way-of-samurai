import React from "react";
import s from './My_posts.module.css'
import {Posts} from "../Post";
import {MyPostPropsType} from "./My_postsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export function MyPosts(props: MyPostPropsType) {

    const onSubmit = (data: AddPostData) => {
        console.log(data.addPost)
        if (data.addPost && data.addPost.trim()) {
            props.addNewPost(data.addPost);
        } else {
            alert('Введите корректные данные')
        }
    }

    const postsElements = props.posts.map(p => <Posts message={p.message} like={p.like}/>)
    return (
        <div className={s.myPosts}>
            <div>
                <div>
                    <h3>My posts</h3>
                </div>
                <AddPostReduxForm onSubmit={onSubmit}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


type AddPostData = {
    addPost: string
}

function AddPostForm(props: InjectedFormProps<AddPostData>) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="input" name="addPost" placeholder={"Add post..."}/>
            </div>
            <button>Add</button>
        </form>
    )
}

const AddPostReduxForm = reduxForm<AddPostData>({form: 'addPost'})(AddPostForm)
