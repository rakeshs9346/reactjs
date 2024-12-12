import React, { useState } from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function App() {
 
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App;
