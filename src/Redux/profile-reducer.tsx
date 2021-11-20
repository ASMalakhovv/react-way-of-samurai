const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export type ProfileActionType =
    ReturnType<typeof addNewPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>;

export type ProfileStateType = {
    newPostText: string
    posts: PostsType
    addressImage: string
}
export type PostsType = Array<PostsTypeObject>
export type PostsTypeObject = {
    id: number
    message: string
    like: number
}


let initialState: ProfileStateType = {
    newPostText: "",
    posts: [
        {id: 1, message: "Hi, how are you", like: 15},
        {id: 2, message: "It's my first post", like: 10}
    ],
    addressImage: "https://assets.bellator.com/andrey_koreshkov_1990/08/23_banner/original-1619507089.jpg"
}

const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionType): ProfileStateType => {
    switch (action.type) {
        case ADD_NEW_POST:
            let body = state.newPostText
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, {id: 3, message: body, like: 0}]
            };
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.changeValue};
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