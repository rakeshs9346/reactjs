import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='w-screen h-24 bg-gray-700 flex justify-around items-center'>
          <div>Logo</div>
          <div>
            <ul className='flex gap-5 '>
               <NavLink to='/'
                style={({isActive})=>({
                    color: isActive ? 'orange': 'black',
                })}><li>Home</li></NavLink>
                              
                <NavLink to='/about'
                style={({isActive})=>({
                    color: isActive ? 'orange': 'black',
                })}><li>About</li></NavLink>
                               
                <NavLink to='/contact'
                style={({isActive})=>({
                    color: isActive ? 'orange': 'black',
                })}><li>Contact</li></NavLink>
      
                <NavLink to='/signup'
                style={({isActive})=>({
                  color:isActive ? 'orange' : 'black'
                })}> <li>Signup</li></NavLink>
                
            </ul>
          </div>
      </div>
    </>
  )
}

export default Navbar
