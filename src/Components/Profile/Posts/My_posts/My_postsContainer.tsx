import {ActionType, ProfilePageType} from "../../../../Redux/Store";
import {addNewPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import {MyPosts} from "./My_posts";
import {StoreContext} from "../../../../StoreContext";


type MyPostsContainerPropsType = {
    posts: ProfilePageType
    dispatch: (action: ActionType) => void
}

export function MyPostsContainer(/*props: MyPostsContainerPropsType*/) {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const onClickPostHandler = () => {
                        store.dispatch(addNewPostActionCreator())
                    }
                    const onChangeHandler = (text: string) => {
                        store.dispatch(updateNewPostTextActionCreator(text))
                    }

                    let posts = store.getState().profilePage.posts
                    let newPostText = store.getState().profilePage.newPostText

                    return <MyPosts onClickPostHandler={onClickPostHandler}
                                    onChangeHandler={onChangeHandler}
                                    posts={posts}
                                    newPostText={newPostText}
                    />
                }

            }
        </StoreContext.Consumer>
    )
}

