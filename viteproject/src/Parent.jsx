import React, { useState } from 'react'
import Callback from './Callback'

function Parent() {
    const [uicolor,setUIcolor]=useState('');
    function getColor(color){
       setUIcolor(color)
    }
  return (
    <>
      <div className='w-screen h-screen flex flex-col p-5 items-center gap-7'>
        <div className='w-60 h-72 border-2 rounded-lg'
        style={{backgroundColor:`${uicolor}`}}></div>
        <Callback getColor={getColor}/>
      </div>
    </>
  )
}

export default Parent
