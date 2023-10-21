class Settings {
    frequency: number;
    emails: string[];
    

    constructor(frequency: number, emails: string[]) {
        this.frequency = frequency
        this.emails = emails
    }
}

export default Settings;