import { useState } from "react";
import StatefulInputBox from "../StatefulInputBox"
import apiService from "../../api/ApiService";
import { useNavigate } from "react-router-dom";

function PrincipalRegistration({ setAccountType, setLoginView, curatorID }: { setAccountType: any, setLoginView: any, curatorID: string }) {

    const [principalName, setPrincipalName] = useState<string>('');
    const [principalEmail, setPrincipalEmail] = useState<string>('');
    const [principalPassword, setPrincipalPassword] = useState<string>('');

    const navigate = useNavigate();

    async function principalRegister() {
        const accountType = await apiService.register(principalEmail, principalPassword, "principal", curatorID)
        setAccountType(accountType)
        console.log(accountType)

        console.log("redirecting to settings")
        navigate("/settings")
    }

    return (
        <div className="login-page">
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

export default PrincipalRegistration