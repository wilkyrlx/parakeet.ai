import { SetStateAction, useState } from "react";
import '../styles/write.css';

function WritePage() {
    const [response, setResponse] = useState('');


    return (
        <div className="App">
            <div className="container">
                <h1>Memory of the Day</h1>
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
                <button id="submit-button" onClick={() => alert(`You responded: ${response}`)}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default WritePage