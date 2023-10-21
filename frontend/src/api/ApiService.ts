import TextStory from "../types/TextStory";

class ApiService {
    backendUri: string;

    constructor(backendUri: string) {
        this.backendUri = backendUri;
    }

    generateHeaders(): any {
        const headers = {
            'Content-Type': 'application/json',
            'userid': 'dummy_user_id',
        };
        return headers
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

    async register() {
        const body = {
            email: 'test1',
            password: 'test2',
            // Other data fields if needed
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

    async login() {
        const body = {
            email: 'test1',
            password: 'test2',
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

    async getAllStories() {
        const response = await fetch(`${this.backendUri}/getAllStories`, {
            method: 'GET',
            headers: this.generateHeaders(),
        });

        const data = await response.json();
        console.log(data);
        return data;
    }



}

// Create and export a singleton instance of ApiService
// TODO: set backend URI
const backendUri = process.env.REACT_APP_BACKEND_URI || "http://127.0.0.1:5001/parakeet-5e1a9/us-central1/app";
const apiService = new ApiService(backendUri);
export default apiService;