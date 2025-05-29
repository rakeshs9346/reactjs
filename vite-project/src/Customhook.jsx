import React from 'react'
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Customhook() {
    const navigate=useNavigate();
  return (
    <>
      <button onClick={()=>navigate('/Parent')}x>go to parent</button>
    </>
  )
}

export default Customhook
