import TextStory from "../types/TextStory";

class ApiService {
    backendUri: string;

    constructor(backendUri: string) {
        this.backendUri = backendUri;
    }

    generateHeaders(): any {
        const headers = {
            'Content-Type': 'application/json'
        };
        return headers
    }

    async login() {
        console.log("logging in...")
        const response = await fetch(`${this.backendUri}/login`, {
            method: 'POST',
            headers: this.generateHeaders(),
            body: ""
        })
        const data = await response.json()
        console.log(data)
        return data
    }

    async addStoryToDB(story: TextStory) {
        const response = await fetch(`${this.backendUri}/addStoryToDB`, {
            method: 'POST',
            headers: this.generateHeaders(),
            body: ""
        })
        const data = await response.json()
        console.log(data)
        return data
    }

}

// Create and export a singleton instance of ApiService
// TODO: set backend URI
const backendUri = process.env.REACT_APP_BACKEND_URI || "NONE_BACKEND_URI";
const apiService = new ApiService(backendUri);
export default apiService;