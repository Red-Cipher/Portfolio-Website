import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Slides from "./components/Slides.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Slides />
  </React.StrictMode>,
)
