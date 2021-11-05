import {ProfilePageType, ActionType, PostsTypeObject} from "./State";

const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const profileReducer = (state: ProfilePageType, action: ActionType):ProfilePageType => {
    if (action.type === ADD_NEW_POST) {
        const post: PostsTypeObject = {id: 3, message: state.newPostText, like: 0};
        state.posts.push(post);
        state.newPostText = ""
    } else if (action.type === UPDATE_NEW_POST_TEXT && (action.changeValue || action.changeValue === "")) {
        state.newPostText = action.changeValue
    }
    return state
}

export default profileReducer;