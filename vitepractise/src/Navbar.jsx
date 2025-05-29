import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

function Navbar() {
  const { username } = useParams();
  return (
    <div className='w-screen h-20 bg-gray-500 flex justify-around items-center'>
      <ul className='flex justify-around w-full'>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-500 underline' : ""}>Home</NavLink></li>
        <li><NavLink to='/about' className={({ isActive }) => isActive ? 'text-orange-500 underline' : ""}>About</NavLink></li>
        <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'text-orange-500 underline' : ""}>contact</NavLink></li>
        <li><NavLink to='/about/:username' className={({ isActive }) => isActive ? 'text-orange-500 underline' : ""}>user</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
