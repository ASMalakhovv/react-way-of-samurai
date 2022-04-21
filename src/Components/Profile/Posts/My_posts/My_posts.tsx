import React from "react";
import s from './My_posts.module.css'
import {Posts} from "../Post";
import {MyPostPropsType} from "./My_postsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utilits/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormControls";


const maxLength10 = maxLengthCreator(10)

export class MyPosts extends React.Component<MyPostPropsType> {

    onSubmit = (data: AddPostData) => {
        console.log(data.addPost)
        if (data.addPost && data.addPost.trim()) {
            this.props.addNewPost(data.addPost);
        } else {
            alert('Введите корректные данные')
        }
    }

    render() {

        console.log('myposts')
        const postsElements = this.props.posts.map(p => <Posts message={p.message} like={p.like}/>)
        return (
            <div className={s.myPosts}>
                <div>
                    <div>
                        <h3>My posts</h3>
                    </div>
                    <AddPostReduxForm onSubmit={this.onSubmit}/>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        )
    }
}


type AddPostData = {
    addPost: string
}

function AddPostForm(props: InjectedFormProps<AddPostData>) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="addPost"
                       placeholder={"Add post..."}
                       validate={[required, maxLength10]}
                />
            </div>
            <button>Add</button>
        </form>
    )
}

const AddPostReduxForm = reduxForm<AddPostData>({form: 'addPost'})(AddPostForm)
