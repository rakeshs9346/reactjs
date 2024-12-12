import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-sreen h-24 bg-slate-600 ' >
      <ul className='flex  fixed right-20 gap-20'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/user'>User</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
