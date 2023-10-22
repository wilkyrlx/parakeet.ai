import { useState } from "react";
import StatefulInputBox from "../StatefulInputBox"
import apiService from "../../api/ApiService";
import LoginView from "../../types/LoginView";

function CuratorRegistration({ setAccountType, setLoginView, setCuratorID }: { setAccountType: any, setLoginView: any, setCuratorID: any }) {

    const [curatorName, setCuratorName] = useState<string>('');
    const [curatorEmail, setCuratorEmail] = useState<string>('');
    const [curatorPassword, setCuratorPassword] = useState<string>(''); 

    async function curatorRegister() {
        // curatorID is set to curatorEmail
        const accountType = await apiService.register(curatorEmail, curatorPassword, "curator", curatorEmail)
        setAccountType(accountType)
        setLoginView(LoginView.PRINCIPAL_REGISTER)
        setCuratorID(curatorEmail)
        console.log(accountType)
    }
    
    return (
        <div className="login-page">
            <div className="register">
                <h3>Create Curator Account</h3>
                <label>
                    Full name: <StatefulInputBox label="Curator Name" textValue={curatorName} setValue={setCuratorName} />
                </label><br />
                <label>
                    Email: <StatefulInputBox label="Curator Email" textValue={curatorEmail} setValue={setCuratorEmail} />
                </label><br />
                <label>
                    Password: <StatefulInputBox label="Curator Password" textValue={curatorPassword} setValue={setCuratorPassword} />
                </label><br />

                <button onClick={() => curatorRegister()}>Register Curator</button>
            </div>
        </div>
    )
}

export default CuratorRegistration