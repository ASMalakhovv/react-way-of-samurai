export type LoginPropsType = {}
export type LoginFormPropsType = {}


export function Login(props: LoginPropsType) {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    )
}


export function LoginForm(props: LoginFormPropsType) {
    return (
        <form>
            <div>
                <input placeholder={"login"}/>
            </div>
            <div>
                <input placeholder={"password"}/>
            </div>
            <div>
                <input type={"checkbox"}/> remember me
            </div>
            <button>Login</button>
        </form>
    )
}