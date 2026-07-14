import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import At from './assets/non.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <At/>
    <App />
  </StrictMode>,
)
