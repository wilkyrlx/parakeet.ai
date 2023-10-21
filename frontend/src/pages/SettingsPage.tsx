import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"
import apiService from "../api/ApiService"
import Settings from "../types/Settings"

function SettingsPage(settings: Settings) {
    const emails = settings.emails.map((email: string) => <li>{email}</li>)
    return (
        <div id="settings-page">
            <h3>Settings Page</h3>
            <label>
                Frequency of sending stories to family, in days (enter 0 to never send): 
                <input name="frequency" type="number" defaultValue={settings.frequency} min="0" />
            </label><br />
            <label>
                Emails to send to: <ul>{emails}</ul>
            </label><br />
            <label>
                Add new email: <input name="email" type="email" />
            </label>
            <button onClick={() => apiService.login()}>Login!</button> {/*TODO change to apiService.setPreferences()*/}
        </div>
    )
}

export default SettingsPage