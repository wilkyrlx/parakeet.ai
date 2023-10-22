import '../styles/write.css';
import apiService from "../api/ApiService";
import TextStory from "../types/TextStory";
import { useEffect, useState } from "react"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const SpeechText = () => {
    const { transcript, listening, resetTranscript } = useSpeechRecognition()

    const startListening = (e) => {
        e.preventDefault();
        SpeechRecognition.startListening({ continuous: true });
    };

    const stopListening = (e) => {
        e.preventDefault();
        SpeechRecognition.stopListening();
        console.log("off")
    };

    const reset = (e) => {
        e.preventDefault();
        resetTranscript();
    };

    return (
        <div>
            <div className="container">
                <h1 className="">Memory of the Day</h1>
                <div id="prompt">
                    <p>Save something important today!</p>
                    <p>{prompt}</p>
                </div>
                <br></br>
                <textarea id="response" value={transcript}></textarea>
                <p>Microphone: {listening ? 'on' : 'off'}</p>
                <div id='audio-buttons'>
                    <button onClick={startListening}>Start</button>
                    <button onClick={stopListening}>Stop</button>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default SpeechText