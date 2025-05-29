import React, { useState } from 'react'
import { BrowserRouter as Router,Routes,Route,Link, useParams} from 'react-router-dom'
import Navbar from './Navbar'


function App() {
  //const {username}=useParams()
  const [theme,setTheme]=useState("dark");
  return (
    <UserContext.Provider value={{theme,setTheme}}>
      <Contact/>
    </UserContext.Provider>
  )
}

export default App
