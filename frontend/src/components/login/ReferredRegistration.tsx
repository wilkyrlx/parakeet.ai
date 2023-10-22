import { useState } from "react";
import apiService from "../../api/ApiService";
import StatefulInputBox from "../StatefulInputBox";

function ReferredRegistration({ setAccountType, setLoginView, curatorID }: { setAccountType: any, setLoginView: any, curatorID: string }) {

    const [viewerName, setViewerName] = useState<string>('');
    const [viewerEmail, setViewerEmail] = useState<string>('');
    const [viewerPassword, setViewerPassword] = useState<string>(''); 

    async function viewerRegister() {
        // TODO: set ViewerID in register request
        const accountType = await apiService.register(viewerEmail, viewerPassword, "viewer", curatorID)
        setAccountType(accountType)
        console.log(accountType)
    }
    
    return (
        <div className="login-page">
            <div className="register">
                <h3>Create Viewer Account</h3>
                <label>
                    Full name: <StatefulInputBox label="Viewer Name" textValue={viewerName} setValue={setViewerName} />
                </label><br />
                <label>
                    Email: <StatefulInputBox label="Viewer Email" textValue={viewerEmail} setValue={setViewerEmail} />
                </label><br />
                <label>
                    Password: <StatefulInputBox label="Viewer Password" textValue={viewerPassword} setValue={setViewerPassword} />
                </label><br />

                <button onClick={() => viewerRegister()}>Register Viewer</button>
            </div>
        </div>
    )
}

export default ReferredRegistration;

