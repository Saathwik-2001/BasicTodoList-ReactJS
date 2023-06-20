import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
