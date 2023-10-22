import '../styles/write.css';
import { useEffect, useState } from "react"
import apiService from "../api/ApiService";
import TextStory from "../types/TextStory";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'



const SpeechText = () => {
    const { transcript, listening, resetTranscript } = useSpeechRecognition()
    const [submitted, setSubmitted] = useState(false)
    const [prompt, setPrompt] = useState("loading prompt")
    const [response, setResponse] = useState('');

    useEffect(() => {
        getPrompt();
      }, [])
    
      async function getPrompt() {
        const promptRaw = await apiService.getPrompt()
        if (promptRaw == null) {
          return
        }
        const currentPrompt = promptRaw.prompt
        setPrompt(currentPrompt)
      }

    const startListening = (e) => {
        e.preventDefault();
        SpeechRecognition.startListening({ continuous: true });
    };

    function sendTranscript(){
        console.log(transcript)
        setSubmitted(true);
        const currentDate = new Date()
        const newstory = {
         title: prompt,
         content: transcript,
         date: currentDate,
        };
        console.log(newstory);
        apiService.addStoryToDB(newstory);
    }

    const stopListening = (e) => {
        e.preventDefault();
        SpeechRecognition.stopListening();
        console.log("off")
        sendTranscript()
    };


    const reset = (e) => {
        e.preventDefault();
        resetTranscript();
    };
    
    if(!submitted){
        return (
            <div>
                <div className="container">
                    <h1 className="">Memory of the Day</h1>
                    <div id="prompt">
                        <p>Save something important today!</p>
                        <p>{prompt}</p>
                    </div>
                    
                    <textarea id="response" placeholder="Your response..." value={transcript}></textarea>
                    <p>Microphone: {listening ? 'on' : 'off'}</p>
                    <div id='audio-buttons'>
                        <button id="start" onClick={startListening}>Start</button> 
                        &nbsp; &nbsp; &nbsp; 
                        <button id="clear" onClick={reset}>Reset</button>
                        &nbsp; &nbsp; &nbsp; 
                        <button id="stop" onClick={stopListening}>Stop </button>
                        <br></br><br></br>
                        <button id="save" onClick={stopListening}>Send </button>
                        <br></br><br></br><br></br><br></br>
                        
                    </div>
                </div>
                
            </div>
            
        )
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

export default SpeechText