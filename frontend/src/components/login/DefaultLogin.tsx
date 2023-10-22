

import { useState } from "react";
import apiService from "../../api/ApiService";
import StatefulInputBox from "../StatefulInputBox";
import LoginView from "../../types/LoginView";
import { useNavigate } from "react-router-dom";


function DefaultLogin({ setAccountType, setLoginView }: { setAccountType: any, setLoginView: any }) {

    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    const navigate = useNavigate();

    async function userLogin() {
        const accountType = await apiService.login(userEmail, userPassword)
        setAccountType(accountType)  
        console.log(accountType)
        if (accountType === "curator") {
            console.log("redirecting to write")
            navigate("/write")
        } else {
            console.log("redirecting to read")
            navigate("/read")
        }
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