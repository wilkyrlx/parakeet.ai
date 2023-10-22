import { useState } from "react";
import apiService from "../api/ApiService"
import StatefulInputBox from "../components/StatefulInputBox";


function LoginPage({ setAccountType }: { setAccountType: any }) {

    const [userEmail, setUserEmail] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    const [principalName, setPrincipalName] = useState<string>('');
    const [principalEmail, setPrincipalEmail] = useState<string>('');
    const [principalPassword, setPrincipalPassword] = useState<string>(''); 

    async function userLogin() {
        const accountType = await apiService.login(userEmail, userPassword)
        setAccountType(accountType)  // TODO: should get something from login request
        console.log(accountType)
    }

    async function principalRegister() {
        const accountType = await apiService.register(principalEmail, principalPassword, "principal")
        setAccountType(accountType)
        console.log(accountType)
    }

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
                <button onClick={() => userLogin()}>Login!</button>
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

                <button onClick={() => principalRegister()}>Register!</button>
            </div>
        </div>
    )
}

export default LoginPage