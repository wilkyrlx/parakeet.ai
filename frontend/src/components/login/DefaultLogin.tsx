

import { useState } from "react";
import apiService from "../../api/ApiService";
import StatefulInputBox from "../StatefulInputBox";
import LoginView from "../../types/LoginView";


function DefaultLogin({ setAccountType, setLoginView }: { setAccountType: any, setLoginView: any }) {

    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    async function userLogin() {
        const accountType = await apiService.login(userEmail, userPassword)
        setAccountType(accountType)  // TODO: should get something from login request
        console.log(accountType)
    }

    return (
        <div className="login-page">
            <div className="login">
                <h3>Login</h3>
                <label>
                    Email: <StatefulInputBox label="User Email" textValue={userEmail} setValue={setUserEmail} />
                </label><br />
                <label>
                    Password: <StatefulInputBox label="User Password" textValue={userPassword} setValue={setUserPassword} />
                </label><br />
                <button onClick={() => userLogin()}>Login!</button>
                <button onClick={() => setLoginView(LoginView.CURATOR_REGISTER)}>Register Curator</button>
            </div>
        </div>
    )
}

export default DefaultLogin