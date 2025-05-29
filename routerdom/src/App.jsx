import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home.jsx'
import Layout from './Layout.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'


function App() {
  
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/about' element={<About/>}>
          <Route path='/about/:userid' element={<About/>}/>
        </Route>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </Router>
  )
}

export default App
