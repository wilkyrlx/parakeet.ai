import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import SpeechText from './pages/AudioPage';
import LoginPage from './pages/LoginPage';
import WritePage from './pages/WritePage';
import ReadPage from './pages/ReadPage';
import SettingsPage from './pages/SettingsPage';
import Settings from "./types/Settings"
import AudioPage from './pages/AudioPage';

function App() {
    const dummySettings = new Settings(7, ["harvardparakeetai@gmail.com"])

    const [accountType, setAccountType] = useState<string>('');
    const [specialCuratorID, setSpecialCuratorID] = useState<string>('NONE');
    const [curatorID, setCuratorID] = useState<string>('')


    function hasCuratorParameter() {
        const searchParams = new URLSearchParams(window.location.search);
        return searchParams.has('curator');
    }

    useEffect(() => {
        if (hasCuratorParameter()) {
            setAccountType('viewer');
            const curatorID: string = new URLSearchParams(window.location.search).get('curator') || 'NONE';
            console.log('curatorID: ' + curatorID);
            setSpecialCuratorID(curatorID);
        }
    }, []);

    function hasWriteAudioAccess() {
        return accountType === 'curator';
    }

    function hasReadSettingsAccess() {
        return accountType === 'principal' || accountType === 'curator';
    }

    return (
        <div className="App">
            <BrowserRouter>
                <div className='navbar'>
                    <Link to={"/"} className='link'>Login</Link>
                    {/* <Link to={"/test"} className='link'>Testing</Link> */}
                    { hasReadSettingsAccess() && <Link to={"/read"} className='link'>Read</Link>}
                    { hasWriteAudioAccess() && <Link to={"/audio"} className='link'>Audio</Link>}
                    { hasWriteAudioAccess() && <Link to={"/write"} className='link'>Write</Link>}
                    { hasReadSettingsAccess() && <Link to={"/settings"} className='link'>Settings</Link> }
                </div>
                <Routes>
                    <Route path='/' element={<LoginPage setAccountType={setAccountType} specialCuratorID={specialCuratorID} curatorID={curatorID} setCuratorID={setCuratorID}/>} />
                    <Route path='/test' element={<HomePage />} />
                    <Route path='/read' element={<ReadPage />} />
                    <Route path='/audio' element={<AudioPage/>} />
                    <Route path='/write' element={<WritePage />} />
                    <Route path='/settings' element={<SettingsPage settings={dummySettings} curatorID={curatorID} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
