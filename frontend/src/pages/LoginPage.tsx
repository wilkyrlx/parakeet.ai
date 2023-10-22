import { useState } from "react";
import apiService from "../api/ApiService"
import StatefulInputBox from "../components/StatefulInputBox";
import DefaultLogin from "../components/login/DefaultLogin";
import LoginView from "../types/LoginView";
import CuratorRegistration from "../components/login/CuratorRegistration";
import PrincipalRegistration from "../components/login/PrincipalRegistration";
import ReferredRegistration from "../components/login/ReferredRegistration";


function LoginPage({ setAccountType }: { setAccountType: any }) {

    const [loginView, setLoginView] = useState<LoginView>(LoginView.LOGIN)
    const [curatorID, setCuratorID] = useState<string>('')

    return (
        <div>
            { loginView === LoginView.LOGIN && <DefaultLogin setAccountType={setAccountType} setLoginView={setLoginView} /> }     
            { loginView === LoginView.CURATOR_REGISTER && <CuratorRegistration setAccountType={setAccountType} setLoginView={setLoginView} setCuratorID={setCuratorID} /> }
            { loginView === LoginView.PRINCIPAL_REGISTER && <PrincipalRegistration setAccountType={setAccountType} setLoginView={setLoginView} curatorID={curatorID} /> }
            { loginView === LoginView.VIEWER_REGISTER && <ReferredRegistration setAccountType={setAccountType} setLoginView={setLoginView} curatorID={curatorID} /> }
        </div>
    )
}

export default LoginPage


// <div className="login-page">
//             {/* User login */}
//             <div className="login">
//                 <h3>Login</h3>
//                 <label>
//                     Email: <StatefulInputBox label="User Email" textValue={userEmail} setValue={setUserEmail} />
//                 </label><br />
//                 <label>
//                     Password: <StatefulInputBox label="User Password" textValue={userPassword} setValue={setUserPassword} />
//                 </label><br />
//                 <button onClick={() => userLogin()}>Login!</button>
//             </div>

//             {/* Principal register */}
//             <div className="register">
//                 <h3>Create Principal Account</h3>
//                 <label>
//                     Full name: <StatefulInputBox label="Principal Name" textValue={principalName} setValue={setPrincipalName} />
//                 </label><br />
//                 <label>
//                     Email: <StatefulInputBox label="Principal Email" textValue={principalEmail} setValue={setPrincipalEmail} />
//                 </label><br />
//                 <label>
//                     Password: <StatefulInputBox label="Principal Password" textValue={principalPassword} setValue={setPrincipalPassword} />
//                 </label><br />

//                 <button onClick={() => principalRegister()}>Register!</button>
//             </div>
//         </div>
        