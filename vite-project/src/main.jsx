import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import Child from './Child.jsx'
import Parent from './Parent.jsx'
import Customhook from './Customhook.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Customhook/>
  </StrictMode>,
)
