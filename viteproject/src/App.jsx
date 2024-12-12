import { useState } from "react";
import Navbar from "./Navbar";
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import { Outlet } from "react-router-dom";

function App() {
 
  return( 
  <>
    <Navbar/>
    <Outlet/>
   </>
  )
}

export default App
