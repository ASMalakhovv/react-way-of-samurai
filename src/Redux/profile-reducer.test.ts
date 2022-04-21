import profileReducer, {addNewPost, deletePost, ProfileStateType} from "./profile-reducer";

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


test('should add a new post', ()=>{
    //data


    //action

    let action = addNewPost('test')
    let result:ProfileStateType = profileReducer(initialState,action)


    //expect

    expect(result.posts.length).toBe(3)

})

test('should delete new post', ()=>{
    //data


    //action

    let action = deletePost(1)
    let result:ProfileStateType = profileReducer(initialState,action)


    //expect

    expect(result.posts.length).toBe(1)

})

test('should check for correct deletion of data', ()=>{
    //data


    //action

    let action = deletePost(1)
    let result:ProfileStateType = profileReducer(initialState,action)


    //expect

    expect(result.posts[0].id).toBe(2)

})