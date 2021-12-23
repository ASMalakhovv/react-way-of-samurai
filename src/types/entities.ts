export type UsersItemType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    },
    followed: boolean
}
export type UsersStateType = {
    items: Array<UsersItemType>
    currentPage: number
    pageSize: number
    totalCount: number
    error: string
}


export type PhotosUsersProfile = {
    small: string
    large: string
}
export type ContactsUsersProfile = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type ProfileUser = {
    aboutMe: string
    contacts: ContactsUsersProfile
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosUsersProfile
}
