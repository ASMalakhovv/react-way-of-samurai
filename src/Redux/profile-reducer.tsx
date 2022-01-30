import {ProfileUser} from "../types/entities";
import {AppThunk} from "./redux-store";
import {profileAPI} from "../api/api";

const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_PROFILE_USER = "SET-PROFILE-USER"
const SET_PROFILE_STATUS = "SET-PROFILE-STATUS"

export type ProfileActionType =
    ReturnType<typeof addNewPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setProfileUser>
    | ReturnType<typeof setProfileStatus>;


export type ProfileStateType = {
    newPostText: string
    posts: PostsType
    addressImage: string
    profileUser: ProfileUser
    status: string
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
        aboutMe: "wdadwa",
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
        userId: 20345,
        photos: {
            small: "",
            large: ""
        },
    },
    status: "",
}

const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionType): ProfileStateType => {
    switch (action.type) {
        case ADD_NEW_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: action.textPost, like: 0}]
            };
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.changeValue};
        case SET_PROFILE_USER:
            return {...state, profileUser: action.profileUser};
        case SET_PROFILE_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
}

export default profileReducer;


//AC
export const addNewPost = (textPost: string) => {
    return {
        type: ADD_NEW_POST,
        textPost
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

export const setProfileStatus = (status: string) => {
    return {
        type: SET_PROFILE_STATUS,
        status
    } as const
}


//THUNK
export const getProfileUsers = (userID: string): AppThunk => async dispatch => {
    let profileUsers: ProfileUser = await profileAPI.getProfile(userID)
    dispatch(setProfileUser(profileUsers))
}

export const getStatus = (userId: string): AppThunk => async dispatch => {
    try {
        let status: string = await profileAPI.getStatus(userId)
        dispatch(setProfileStatus(status))
    } catch (e) {
        alert('Не могу запросить ваш статус')
    }
}

export const setStatus = (status: string): AppThunk => async dispatch => {
    try {
        let res: number = await profileAPI.updateStatus(status)
        if (res === 0) {
            dispatch(setProfileStatus(status))
        }
    } catch (e) {
        alert('Не могу установить статус')
    }
}