import { SetStateAction, useState, useEffect } from "react";
import '../styles/write.css';
import apiService from "../api/ApiService";
import TextStory from "../types/TextStory";

function WritePage() {
  const [prompt, setPrompt] = useState<string>("loading prompt");
  const [response, setResponse] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    getPrompt();
  }, [])

  async function getPrompt() {
    const promptRaw = await apiService.getPrompt()
    if (promptRaw == null) {
      return
    }
    const currentPrompt: string = promptRaw.prompt
    setPrompt(currentPrompt)
  }

  function submitStory() {
    setSubmitted(true);
    const currentDate = new Date()
    const newstory: TextStory = {
      title: prompt,
      content: response,
      date: currentDate,
    };
    console.log(newstory);
    apiService.addStoryToDB(newstory);
  };

  if (!submitted) {
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
  else {
    return (
      <div>
        <div className="container">
          <h1>Memory of the Day</h1>
          <div id="prompt">
            <p>Thank you for submitting!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WritePage