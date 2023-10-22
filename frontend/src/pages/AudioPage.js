import '../styles/write.css';
import apiService from "../api/ApiService";
import TextStory from "../types/TextStory";
import { useEffect, useState } from "react"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const SpeechText = () => {
    const [isrecording, setisrecording] = useState(false)
    const { transcript, resetTranscript } = useSpeechRecognition()
        useEffect(() => {
            if (isrecording){
                SpeechRecognition.startListening({continuous: true})
            }
            console.log("listening starts")
        }, [isrecording]);

    function turnon(){
        setisrecording(true)
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
                <form>
                    <textarea id="response" value={transcript}></textarea>
                    <button onClick={() => turnon()}>Start Recording</button>
                    <button onClick={() => resetTranscript}>clear text</button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            SpeechRecognition.stopListening()
                            console.log("listening stopped")
                        }}
                    > Stop listening</button>
                </form>
            </div>
        </div>
    )
}

export default SpeechText