import React, { useState } from 'react';
import { useContext } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { InternetIdentityContext } from './context/internet-identity';
import logo from './logo.svg';

export function index () {
    const [count, setCount] = useState(0)
    const { identity } = useContext(InternetIdentityContext);

    return (
        <div className="App">

            <header className="App-header">
                <p><small style={{wordBreak: 'break-all'}}>Signed in as principle: {identity?.getPrincipal().toHex()}</small></p>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello Vite + React!</p>
                <p>
                    <button type="button" onClick={() => setCount((count) => count + 1)}>
                        count is: {count}
                    </button>
                </p>
                <p>
                    Edit <code>App.tsx</code> and save to test HMR updates.
                </p>
                <p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    {' | '}
                    <a
                        className="App-link"
                        href="https://vitejs.dev/guide/features.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vite Docs
                    </a>
                </p>
            </header>
        </div>
    );
}

export function auth () {

    const { authenticate, isAuthed } = useContext(InternetIdentityContext);
    const { state } = useLocation<{referrer: string}>();
    const success = state?.referrer || '/';
    
    if (isAuthed) {
        return <Redirect to={success} />
    }

    return (
        <>
            <h1>Authenticate</h1>
            <button onClick={() => authenticate()}>Authenticate</button>
        </>
    )
}