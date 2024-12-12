import React from 'react'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='w-screen h-20 bg-gray-700 flex justify-around items-center'>
        <div className='p-2 text-orange-400 text-2xl '>Logo</div>
        <ul className='flex items-center gap-5'>
           <NavLink 
           to="/home" >
            <li>Home</li></NavLink>
        </ul>
    
      </div>
    </>
  )
}

export default Navbar
