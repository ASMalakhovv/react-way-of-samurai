import {ActionType,ProfilePageType} from "../../../../Redux/Store";
import { addNewPostActionCreator, updateNewPostTextActionCreator } from "../../../../Redux/profile-reducer";
import { MyPosts } from "./My_posts";


type MyPostsContainerPropsType = {
    posts: ProfilePageType
    dispatch:(action:ActionType) => void
}

export function MyPostsContainer(props: MyPostsContainerPropsType) {

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

