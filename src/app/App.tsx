import React, {useEffect, useState} from 'react';
import AuthorizationPage from "../pages/Authorization";
import MainPage from "../pages/Main";
import RegistrationPage from "../pages/Registration";
import ChatList from "../pages/ChatList";
import {ChatIconType} from "../shared/types";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StubPage from "../pages/Stub";
import ProfilePage from "../pages/Profile";
import Chat from "../pages/Chat";


function App() {



    return (
        <>
            {/*<AuthorizationPage />*/}
            {/*<MainPage/>*/}
            {/*  <RegistrationPage />*/}
            {/*  <ChatList />*/}

            <Router>
                <Routes>
                    <Route path="/" element={<StubPage />} />
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/auth" element={<AuthorizationPage />} />
                    <Route path="/register" element={<RegistrationPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/chats" element={<ChatList />} />
                    <Route path="/chats/:id" element={<Chat />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
