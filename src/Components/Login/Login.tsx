import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {login} from "../../Redux/auth-reducer";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utilits/validators/validators";
import {Redirect} from "react-router-dom";
import style from '../common/FormsControls/FormControl.module.css'


export type LoginData = {
    login: string
    password: string
    rememberMe: boolean
}


function Login(props: ConnectType) {
    debugger
    const onSubmit = (data: LoginData) => {
        const {login, password} = data
        props.login(login, password)
    }

    if (props.isLogin && props.isAuth) {
        return <Redirect to='/profile'/>
    }


    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export function LoginForm(props: InjectedFormProps<LoginData>) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name="login" placeholder={"login"} validate={required}/>
            </div>
            <div>
                <Field component={Input} name="password" placeholder={"password"} validate={required}/>
            </div>
            {props.error && <div className={style.formCommonError}>
                {props.error}
            </div>}
            <div>
                <Field component={Input} name="rememberMe" type={"checkbox"}/> remember me
            </div>
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