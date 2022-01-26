import {
    addNewPost,
    PostsType,
    ProfileActionType,
    updateNewPostText
} from "../../../../Redux/profile-reducer";
import {MyPosts} from "./My_posts";
import {AppStateType} from "../../../../Redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";
import {ComponentType} from "react";

export type MyPostPropsType = mapStateToPropsType & mapDispatchPropsType
export type mapStateToPropsType = {
    posts: PostsType
    newPostText: string
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}


export type mapDispatchPropsType = {
    onClickPostHandler: () => void
    onChangeHandler: (text: string) => void
}
let mapDispatchProps = (dispatch: (action: ProfileActionType) => void): mapDispatchPropsType => {
    return {
        onClickPostHandler: () => {
            dispatch(addNewPost())
        },
        onChangeHandler: (text: string) => {
            dispatch(updateNewPostText(text))
        }
    }
}

export default compose<ComponentType>(connect(mapStateToProps, mapDispatchProps))(MyPosts)
