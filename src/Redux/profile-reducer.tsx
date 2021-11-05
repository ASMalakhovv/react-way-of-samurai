import {ProfilePageType, PostsTypeObject, ActionType} from "./Store";

const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export type ProfileActionType =
    ReturnType<typeof addNewPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>;
const profileReducer = (state: ProfilePageType, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_NEW_POST:
            const post: PostsTypeObject = {id: 3, message: state.newPostText, like: 0};
            state.posts.push(post);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.changeValue;
            return state;
        default:
            return state;
    }
}

export default profileReducer;

export const addNewPostActionCreator = () => {

    return {
        type: ADD_NEW_POST
    } as const
}
export const updateNewPostTextActionCreator = (value: string) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        changeValue: value
    } as const
};