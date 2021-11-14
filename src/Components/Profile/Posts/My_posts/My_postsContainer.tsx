import {ActionType, ProfilePageType} from "../../../../Redux/Store";
import {addNewPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import {MyPosts} from "./My_posts";
import {AppStateType} from "../../../../Redux/redux-store";
import { connect } from "react-redux";


let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchProps = (dispatch:(action:ActionType)=>void) => {
    return {
        onClickPostHandler: ()=>{dispatch(addNewPostActionCreator())},
        onChangeHandler: (text:string) => {dispatch(updateNewPostTextActionCreator(text))}
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchProps)(MyPosts)
