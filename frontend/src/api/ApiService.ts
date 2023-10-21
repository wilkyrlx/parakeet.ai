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

    async register() {
        const body = {
          user: 'test1',
          pass: 'test2',
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

}

// Create and export a singleton instance of ApiService
// TODO: set backend URI
const backendUri = process.env.REACT_APP_BACKEND_URI || "http://127.0.0.1:5001/parakeet-5e1a9/us-central1/app";
const apiService = new ApiService(backendUri);
export default apiService;