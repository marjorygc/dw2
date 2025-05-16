import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mybutton from './MyButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Mybutton />
  </StrictMode>,
)
