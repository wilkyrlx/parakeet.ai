import { SetStateAction, useState, useEffect } from "react";
import '../styles/write.css';
import apiService from "../api/ApiService";
import TextStory from "../types/TextStory";

function WritePage() {
    const [response, setResponse] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
      // This function runs after the component has mounted
      const interval = setInterval(() => {
        const now = new Date(); // Create a Date object to get the current date and time
        const formattedDate = now.toLocaleDateString(); // Format the date as a string
        setCurrentDate(formattedDate); // Update the state with the current date
      }, 1000); // Update every second
  
      // Clean up the interval when the component unmounts
      return () => clearInterval(interval);
    }, []);

    

    function submitStory(){
        const currentDate = new Date()
        const newstory: TextStory = {
            title: "Tell us a story about your favorite food! Why is it so special to you?",
            content: "${response}",
            date: currentDate,
        };
        apiService.addStoryToDB(newstory);
    }; 

    return (
        <div>
            <div className="container">
                <h1>Memory of the Day <br></br> {currentDate}</h1> 
                <div id="prompt">
                    <p>Save something important today!</p>
                    <p>Tell us a story about your favorite food! Why is it so special to you?</p>
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