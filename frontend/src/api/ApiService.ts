import config from "../config/config.js";
import TextStory from "../types/TextStory";

class ApiService {
    backendUri: string;
    userId: string;
    curatorId: string;

    constructor(backendUri: string) {
        this.backendUri = backendUri;
        this.userId = "UNKNOWN_USER_ID";
        this.curatorId = "UNKNOWN_CURATOR_ID";
    }

    generateHeaders(): any {
        const headers = {
            'Content-Type': 'application/json',
            'userid': this.userId,
            'curatorid': this.curatorId
        };
        return headers
    }
    
    // Note: both register and login log the user in
    async register(email: string, password: string, accountType: string, curatorID: string) {
        this.userId = email;    // set userId
        this.curatorId = curatorID; // set curatorId

        const body = {
            email: email,
            password: password,
            accountType: accountType,
            curatorID: curatorID,
        };

        try {
            const response = await fetch(`${this.backendUri}/register`, {
                method: 'POST',
                headers: this.generateHeaders(),
                body: JSON.stringify(body), // Stringify the data to JSON
            });
    
            const data = await response.json();
            console.log(data);
            const accountType = data.accountType;
            return accountType; 
        } catch (error) {
            console.error("register request failed: ", error);   
        }
    }

    // Note: both register and login log the user in
    async login(email: string, password: string) {
        this.userId = email;

        const body = {
            password: password,
        };

        try {
            const response = await fetch(`${this.backendUri}/login`, {
                method: 'POST',
                headers: this.generateHeaders(),
                body: JSON.stringify(body), // Stringify the data to JSON
            });
    
            const data = await response.json();
            console.log(data);
            const accountType = data.accountType;
            this.curatorId = data.curatorID;
            return accountType; 
        } catch (error) {
            console.error("register request failed: ", error);   
        }
    }

    async addStoryToDB(story: TextStory) {

        try {
            const response = await fetch(`${this.backendUri}/addStoryToDB`, {
                method: 'POST',
                headers: this.generateHeaders(),
                body: JSON.stringify(story)
            })
            const data = await response.json()
            console.log(data)
            return data     
        } catch (error) {
            console.error("addStoryToDB request failed: ", error);
        }
       
    }

    async getAllStoriesFromDB() {
        try {
            const response = await fetch(`${this.backendUri}/getAllStoriesFromDB`, {
                method: 'GET',
                headers: this.generateHeaders(),
            });
    
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("getAllStoriesFromDB request failed: ", error);
        }
    }

    async getPrompt() {
        try {
            const response = await fetch(`${this.backendUri}/getPrompt`, {
                method: 'GET',
                headers: this.generateHeaders(),
            });
    
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("getPrompt request failed: ", error);
        }
    }

    async sendEmail(destinationEmail: string, linkCode: string) {
        // TODO: validate email 
        const body = {
            destinationEmail: destinationEmail,
            linkCode: linkCode,
        };

        try {
            const response = await fetch(`${this.backendUri}/sendEmail`, {
                method: 'POST',
                headers: this.generateHeaders(),
                body: JSON.stringify(body), // Stringify the data to JSON
            });
    
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error("sendEmail request failed: ", error);
        }
    }
}

// Create and export a singleton instance of ApiService
const backendUri = config.backendUri || "http://127.0.0.1:5001/parakeet-5e1a9/us-central1/app";
const apiService = new ApiService(backendUri);
export default apiService;