import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
     <div className='w-screen h-20 bg-gray-400 flex items-center justify-around'>
        <div className=' text-2xl shadow-md px-4 py-1 rounded-md border-none'>Logo</div>
        <div>
            <ul className='flex items-center gap-4 px-2'>
                <li><NavLink
                 to="/" 
                 className={({isActive})=>
                    isActive ? 'text-orange-500' : 'text-black'
                 }>Home </NavLink> </li>
                <li>
                 <NavLink 
                 to="/contact"
                 className={({isActive})=>
                    isActive ? 'text-orange-500' : 'text-black'
                 }>Contact </NavLink></li>
                <li>
                 <NavLink 
                 to="/about"
                 className={({isActive})=>
                    isActive ? 'text-orange-500' : 'text-black'
                 }>About </NavLink></li>
            </ul>
        </div>
    </div> 
    </>
  )
}

export default Header
