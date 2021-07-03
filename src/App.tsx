import React from 'react'
import InternetIdentityProvider from './context/internet-identity'
import { AppRoutes } from './constants/routes'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <InternetIdentityProvider>
            <Router>
                <AppRoutes />
            </Router>
        </InternetIdentityProvider>
    );
}

export default App
