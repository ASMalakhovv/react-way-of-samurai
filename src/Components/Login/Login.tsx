import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {login} from "../../Redux/auth-reducer";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utilits/validators/validators";
import {Redirect} from "react-router-dom";
import style from '../common/FormsControls/FormControl.module.css'
import {createField} from "./FormsControl";


export type LoginData = {
    login: string
    password: string
    rememberMe: boolean
}


function Login({isLogin, isAuth, ...props}: ConnectType) {
    const onSubmit = (data: LoginData) => {
        const {login, password} = data
        props.login(login, password)
    }

    if (isLogin && isAuth) {
        return <Redirect to='/profile'/>
    }


    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export function LoginForm({handleSubmit, error, ...props}: InjectedFormProps<LoginData>) {
    return (
        <form onSubmit={handleSubmit}>
            {createField(Input, "login", "login", required, "", "")}
            {createField(Input, "password", "password", required, "password", "")}
            {error && <div className={style.formCommonError}> {error} </div>}
            {createField(Input, "rememberMe", "", () => undefined, "checkbox", "remember me")}
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginData>({form: 'login'})(LoginForm)

type MstpType = {
    isLogin: boolean
    isAuth: boolean
}
type MdtpType = {
    login: (email: string, password: string) => void
}

type ConnectType = MstpType & MdtpType


const mstp = (state: AppStateType): MstpType => {
    return {
        isLogin: state.auth.isLogin,
        isAuth: state.auth.isAuth
    }
}

export default connect<MstpType, MdtpType, {}, AppStateType>(
    mstp, {login})(Login)