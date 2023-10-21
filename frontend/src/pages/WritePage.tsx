import { SetStateAction, useState, useEffect } from "react";
import '../styles/write.css';
import apiService from "../api/ApiService";
import TextStory from "../types/TextStory";

function WritePage() {
    const [prompt, setPrompt] = useState<string>('Tell us a story about your favorite food! Why is it so special to you?');
    const [response, setResponse] = useState<string>('');
      
    function submitStory(){
        const currentDate = new Date()
        const newstory: TextStory = {
            title: prompt,
            content: response,
            date: currentDate,
        };
        console.log(newstory);
        apiService.addStoryToDB(newstory);
    }; 

    return (
        <div>
            <div className="container">
                <h1>Memory of the Day</h1> 
                <div id="prompt">
                    <p>Save something important today!</p>
                    <p>{prompt}</p>
                </div>
                
                <textarea
                    id="response"
                    placeholder="Your response..."
                    value={response}
                    onChange={(ev) => setResponse(ev.target.value)}
                />
                <br /><br />
                <button id="submit-button" onClick={() => submitStory()}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default WritePage