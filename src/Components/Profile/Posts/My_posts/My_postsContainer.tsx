import {ActionType, PostsType,} from "../../../../Redux/Store";
import {addNewPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import {MyPosts} from "./My_posts";
import {AppStateType} from "../../../../Redux/redux-store";
import { connect } from "react-redux";


export type mapStateToPropsType = {
    posts:PostsType
    newPostText: string
}
let mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}


export type mapDispatchPropsType = {
    onClickPostHandler:() => void
    onChangeHandler:(text:string) => void
}
let mapDispatchProps = (dispatch:(action:ActionType)=>void):mapDispatchPropsType => {
    return {
        onClickPostHandler: ()=>{dispatch(addNewPostActionCreator())},
        onChangeHandler: (text:string) => {dispatch(updateNewPostTextActionCreator(text))}
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchProps)(MyPosts)
