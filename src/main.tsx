import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import * as buffer from 'buffer';
(window as any).Buffer = buffer;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
