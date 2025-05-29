import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import RandomColor from './RandomColor.jsx'
import Accordian from './Accordian.jsx'
import Imageslider from './Imageslider.jsx'
import Navbar from './Navbar.jsx'
import Parent from './parent.jsx'
import Child from './Child.jsx'
import Themeswitch from './Themeswitch.jsx'

createRoot(document.getElementById('root')).render(
  <>
  {/* <Accordian/> */}
    {/* <Imageslider/> */}
    {/* <RandomColor/> */}
    {/* <App/>
     */}
{/* 
      
   
    {/* <Parent/> */}
    {/* <App/> */}
    {/* <FetchApi/> */}
    <Child/>
    {/* <Themeswitch/> */}
  </>  
)
