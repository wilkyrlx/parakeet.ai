import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useState } from "react"
import apiService from "../api/ApiService"
import Settings from "../types/Settings"

function SettingsPage(settings: Settings) {
    const [frequency, setFrequency] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [emails, setEmails] = useState<string[]>([]);
    //const emailList = settings.emails.map((email: string) => <li>{email}</li>)
    const emailList = emails.map((email: string) => <li>{email}</li>)

    return (
        <div id="settings-page">
            <h3>Settings Page</h3>
            <label>
                Frequency of sending stories to family, in days (enter 0 to never send):
                <input name="frequency" type="number" defaultValue={settings.frequency} min="0"
                    value={frequency}
                    onChange={(ev) => setFrequency(ev.target.value)} />
            </label><br />
            <label>
                Add new email: <input name="email" type="email"
                    value={newEmail}
                    onChange={(ev) => setNewEmail(ev.target.value)} />
            </label>
            <button onClick={() => {
                if (newEmail) {
                    setEmails([...emails, newEmail]);
                    setNewEmail(''); 
                }
            }}>Add</button><br />
            <label>
                Current list of emails: <ul>{emailList}</ul>
            </label><br />
            {/*TODO fix login */}
            <button onClick={() => alert(`Frequency: ${frequency}\nEmails: ${emails}`)}/*{() => apiService.login('FIXME', "FIXME")}*/>Update settings</button> {/*TODO change to apiService.setPreferences()*/}
        </div>
    )
}

export default SettingsPage