import apiService from "../api/ApiService"


function LoginPage() {
    return (
        <div className="login-page">
            <div className="login">
                <h3>Login</h3>
                <label>
                    Email: <input name="email" />
                </label><br />
                <label>
                    Password: <input name="password" />
                </label><br />
                <button onClick={() => apiService.login()}>Login!</button>
            </div>

            <div className="register">
                <h3>Create Principal Account</h3>
                <label>
                    Full name: <input name="name" />
                </label><br />
                <label>
                    Email: <input name="email" />
                </label><br />
                <label>
                    Password: <input name="password" />
                </label><br />

                <button onClick={() => apiService.register()}>Register!</button>
            </div>
        </div>
    )
}

export default LoginPage