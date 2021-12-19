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
    items:Array<UsersItemType>
    pageSize:number
    totalCount:number
    error:string
}