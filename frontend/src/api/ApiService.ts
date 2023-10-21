import TextStory from "../types/TextStory";

class ApiService {
    backendUri: string;
    userId: string;

    constructor(backendUri: string) {
        this.backendUri = backendUri;
        this.userId = "UNKNOWN_USER_ID";
    }

    generateHeaders(): any {
        const headers = {
            'Content-Type': 'application/json',
            'userid': this.userId,
        };
        return headers
    }
    

    async register(email: string, password: string) {
        this.userId = email;    // set userId

        const body = {
            email: email,
            password: password,
        };

        const response = await fetch(`${this.backendUri}/register`, {
            method: 'POST',
            headers: this.generateHeaders(),
            body: JSON.stringify(body), // Stringify the data to JSON
        });

        const data = await response.json();
        console.log(data);
        return data;
    }

    async login(email: string, password: string) {
        this.userId = email;

        const body = {
            password: password,
        };

        const response = await fetch(`${this.backendUri}/login`, {
            method: 'POST',
            headers: this.generateHeaders(),
            body: JSON.stringify(body), // Stringify the data to JSON
        });

        const data = await response.json();
        console.log(data);
        return data;
    }

    async addStoryToDB(story: TextStory) {
        const response = await fetch(`${this.backendUri}/addStoryToDB`, {
            method: 'POST',
            headers: this.generateHeaders(),
            body: JSON.stringify(story)
        })
        const data = await response.json()
        console.log(data)
        return data
    }

    async getAllStoriesFromDB() {
        const response = await fetch(`${this.backendUri}/getAllStoriesFromDB`, {
            method: 'GET',
            headers: this.generateHeaders(),
        });

        const data = await response.json();
        console.log(data);
        return data;
    }



}

// Create and export a singleton instance of ApiService
// TODO: set backend URI, change userId based on login. Maybe create this singleton on login?
const backendUri = process.env.REACT_APP_BACKEND_URI || "http://127.0.0.1:5001/parakeet-5e1a9/us-central1/app";
const apiService = new ApiService(backendUri);
export default apiService;