import React, {useState } from 'react'
import About from './About'


function App() {
  const [color,setColor]=useState(null)

  function handleColor(input){
      setColor(input)
  }
  
  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center flex-col gap-3'>
         <div className='w-60 h-60 border'
         style={{background:`${color}`}}>

         </div>
         <About bgcolor={handleColor} />
      </div>
    </>
    
  )
}

export default App
