import s from './NavFriends.module.css'

type NavFriendsPropsType = {
    img: string
    name: string
}





export function NavFriends(props:NavFriendsPropsType) {
    return (
        <div>
            <div className={s.navProfile}>
                <img src={props.img}/>
                <div>
                {props.name}
                </div>
            </div>
        </div>
    )
}