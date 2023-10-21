import apiService from "../api/ApiService"


function LoginPage() {
    return (
        <div id="login-page">
            Login Page
            <button onClick={() => apiService.login()}>Login!</button>
        </div>
    )
}

export default LoginPage