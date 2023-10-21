import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import WritePage from './pages/WritePage';
import ReadPage from './pages/ReadPage';
import SettingsPage from './pages/SettingsPage';
import Settings from "./types/Settings"

function App() {
    const dummySettings = new Settings(7, ["harvardparakeetai@gmail.com"])
    return (
        <div className="App">
            <BrowserRouter>
                <div className='navbar'>
                    <Link to={"/login"} className='link'>Login</Link>
                    <Link to={"/read"} className='link'>Read</Link>
                    <Link to={"/write"} className='link'>Write</Link>
                    <Link to={"/settings"} className='link'>Settings</Link>
                </div>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/read' element={<ReadPage />} />
                    <Route path='/write' element={<WritePage />} />
                    <Route path='/settings' element={<SettingsPage settings={dummySettings}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
