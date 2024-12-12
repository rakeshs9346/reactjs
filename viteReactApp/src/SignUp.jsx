import React from 'react'

function SignUp() {
  return (
    <>
      <div className='flex flex-col justify-center items-center p-4 gap-2 text-lg'>
        <div>
        <label for="101">username: </label>
        <input type="text" placeholder='username' id='101'
        className='border-solid border pl-2 rounded-md'/>
        </div>
        <div>
          <label for="102">password: </label>
        <input type="password" placeholder='password' id='102'
        className='border-solid border pl-2 rounded-md'/>
        </div>
        
        <button className='border px-2 rounded-md bg-blue-600 text-white py-1'>signup</button>
      </div>
    </>
  )
}

export default SignUp
