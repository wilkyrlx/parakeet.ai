import { useState } from "react";
import apiService from "../api/ApiService"
import StatefulInputBox from "../components/StatefulInputBox";


function LoginPage() {

    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    const [principalName, setPrincipalName] = useState<string>('');
    const [principalEmail, setPrincipalEmail] = useState<string>('');
    const [principalPassword, setPrincipalPassword] = useState<string>(''); 

    return (
        <div className="login-page">
            {/* User login */}
            <div className="login">
                <h3>Login</h3>
                <label>
                    Email: <StatefulInputBox label="User Email" textValue={userEmail} setValue={setUserEmail} />
                </label><br />
                <label>
                    Password: <StatefulInputBox label="User Password" textValue={userPassword} setValue={setUserPassword} />
                </label><br />
                <button onClick={() => apiService.login(userEmail, userPassword)}>Login!</button>
            </div>

            {/* Principal register */}
            <div className="register">
                <h3>Create Principal Account</h3>
                <label>
                    Full name: <StatefulInputBox label="Principal Name" textValue={principalName} setValue={setPrincipalName} />
                </label><br />
                <label>
                    Email: <StatefulInputBox label="Principal Email" textValue={principalEmail} setValue={setPrincipalEmail} />
                </label><br />
                <label>
                    Password: <StatefulInputBox label="Principal Password" textValue={principalPassword} setValue={setPrincipalPassword} />
                </label><br />

                <button onClick={() => apiService.register(principalEmail, principalPassword)}>Register!</button>
            </div>
        </div>
    )
}

export default LoginPage