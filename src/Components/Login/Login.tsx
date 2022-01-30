import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {loginApplication} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";


export type LoginData = {
    login: string
    password: string
    rememberMe: boolean
}


function Login(props: ConnectType) {
    const onSubmit = (data: LoginData) => {
        const {login, password} = data
        props.loginApplication(login, password)
    }
    return (
        !props.isLogin
            ? <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
            : <Redirect to={"/profile"}/>
    )
}


export function LoginForm(props: InjectedFormProps<LoginData>) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="input" name="login" placeholder={"login"}/>
            </div>
            <div>
                <Field component="input" name="password" placeholder={"password"}/>
            </div>
            <div>
                <Field component="input" name="rememberMe" type={"checkbox"}/> remember me
            </div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginData>({form: 'login'})(LoginForm)

type MstpType = {
    isLogin: boolean
}
type MdtpType = {
    loginApplication: (email: string, password: string) => void
}

type ConnectType = MstpType & MdtpType


const mstp = (state: AppStateType): MstpType => {
    return {
        isLogin: state.auth.isLogin
    }
}

export default connect<MstpType, MdtpType, {}, AppStateType>(
    mstp, {loginApplication})(Login)