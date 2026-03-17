import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { init } from "@neutralinojs/lib";
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

init();