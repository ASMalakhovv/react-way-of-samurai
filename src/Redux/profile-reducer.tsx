import {ContactsUsersProfile, PhotosUsersProfile, ProfileUser} from "../types/entities";

const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_PROFILE_USER = "SET-PROFILE-USER"
export type ProfileActionType =
    ReturnType<typeof addNewPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setProfileUser>;


export type ProfileStateType = {
    newPostText: string
    posts: PostsType
    addressImage: string
    profileUser: ProfileUser
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
    addressImage: "https://assets.bellator.com/andrey_koreshkov_1990/08/23_banner/original-1619507089.jpg",
    profileUser: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: "",
            vk: "",
            twitter: "",
            instagram: "",
            youtube: "",
            github: "",
            mainLink: "",
        },
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 1,
        photos: {
            small: "",
            large: ""
        },
    },
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
        case SET_PROFILE_USER:
            return {...state, profileUser:action.profileUser}
        default:
            return state;
    }
}

export default profileReducer;

export const addNewPost = () => {

    return {
        type: ADD_NEW_POST
    } as const
}
export const updateNewPostText = (value: string) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        changeValue: value
    } as const
};

export const setProfileUser = (profileUser: ProfileUser) => {
    return {
        type: SET_PROFILE_USER,
        profileUser
    } as const
}