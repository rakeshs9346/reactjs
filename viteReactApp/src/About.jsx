import React, { useContext, useState } from 'react'

function About({bgcolor}) {
  const [input,setInput]=useState('')

  function handleChange(e){
       const color=e.target.value;
       setInput(color)
       bgcolor(color)
  }
  
  return (
    
     <>
       <div>
        <input type="text" placeholder='Enter color' 
         value={input}
         onChange={handleChange}
         className='w-60  px-2 border-2'/>
       </div>
     </>
  )
}

export default About
