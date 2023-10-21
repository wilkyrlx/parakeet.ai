import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useState } from "react"
import apiService from "../api/ApiService"
import Settings from "../types/Settings"

function SettingsPage(settings: Settings) {
    const [frequency, setFrequency] = useState('');
    const [emails, setEmails] = useState('');
    const emailList = settings.emails.map((email: string) => <li>{email}</li>)

    /*function handleSubmit(e) {
        const formData = new FormData(e.target);
        const entries = Object.fromEntries(formData.entries());
        setFrequency(entries.get(frequency));
        setFrequency(entries.get());
    }*/

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
                    value={emails}
                    onChange={(ev) => setEmails(ev.target.value)} />
            </label><br />
            <label>
                Current list of emails: <ul>{emailList}</ul>
            </label><br />
            {/*TODO fix login */}
            <button onClick={() => alert(`Frequency: ${frequency}\nEmails: ${emails}`)}/*{() => apiService.login('FIXME', "FIXME")}*/>Login!</button> {/*TODO change to apiService.setPreferences()*/}
        </div>
    )
}

export default SettingsPage