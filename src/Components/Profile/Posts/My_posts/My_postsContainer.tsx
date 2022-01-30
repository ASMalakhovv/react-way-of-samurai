import {
    addNewPost,
    PostsType,
} from "../../../../Redux/profile-reducer";
import {MyPosts} from "./My_posts";
import {AppStateType} from "../../../../Redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";
import {ComponentType} from "react";

export type MyPostPropsType = MapStateToPropsType & MapDispatchPropsType

export type MapStateToPropsType = {
    posts: PostsType
}
export type MapDispatchPropsType = {
    addNewPost: (textPost:string) => void
}



let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}


export default compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchPropsType, {}, AppStateType>
    (mapStateToProps, {addNewPost}))
(MyPosts)
