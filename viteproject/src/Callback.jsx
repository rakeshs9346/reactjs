import React, { useState } from 'react'

function Callback({getColor}) {
    const [activeColor,setActiveColor]=useState('');

    function handleChange(e){
        let val=e.target.value;
       setActiveColor(val)
        getColor(val)

    }

  return (
    <>
      <input type="text" 
      className='px-2 py-1 border-2 outline-none w-60 rounded-md'
      value={activeColor}
      onChange={handleChange}/>
    </>
  )
}

export default Callback
