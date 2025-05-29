import React, { useState } from 'react'

function Loginpage() {
  const [action, setAction] = useState('Sign Up');
  return (
    <div className='w-screen h-screen flex justify-center bg-red-200'>
      <div className='flex flex-col items-center border-2 w-2/3 mt-5 gap-5 mb-4'>
        <div className='text-5xl text-purple-700 w-100 mt-3 mb-10'>{action}</div>

        {action === 'Sign Up' ? <div className='flex bg-slate-500 rounded'>
          <label htmlFor="101" className='text-xl py-1'>🧑‍💼</label>
          <input type="text" id='101' placeholder='Name' className='bg-transparent px-2 py-1 border-none outline-none text-xl ' />
        </div> : <div></div>}

        <div className='flex bg-slate-500 rounded'>
          <label htmlFor="102" className='text-xl py-1'>✉️</label>
          <input type='email' id='102' placeholder='Email Id' className='bg-transparent px-2 py-1 border-none outline-none text-xl' />
        </div>

        <div className='flex bg-slate-500 rounded'>
          <label htmlFor="103" className='text-xl py-1'>🔑</label>
          <input type='password' id='103' placeholder='password' className='bg-transparent px-2 py-1 border-none outline-none text-xl ' />
        </div>
        <div className='mb-5'>
          {action === 'Sign Up' ? <div></div> : <div className='cursor-pointer'>Forget password ? <span className='text-blue-500 underline cursor-pointer'>Click Here</span></div>}
        </div>
        <div className='flex justify-around gap-10'>
          <button className='text-white px-5 py-2 rounded-2xl  w-32' style={{ backgroundColor: action === 'Sign Up' ? 'purple' : 'grey' }}
            onClick={() => setAction('Sign Up')}>Sign up</button>
          <button className='text-white px-5 py-2  rounded-2xl  w-32 ' style={{ backgroundColor: action === 'Login' ? 'purple' : 'grey' }}
            onClick={() => setAction('Login')}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Loginpage
