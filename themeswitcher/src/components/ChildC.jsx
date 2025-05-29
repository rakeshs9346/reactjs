import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { userContext } from '../App'

function ChildC() {
    const {user}=useContext(userContext);
    const {theme,setTheme}=useContext(ThemeContext);
    function togglecolor(){
        if(theme==='light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }
  return (
    // <div>
    //     {user.username}
    // </div>
    <>
       <div className='w-screen h-screen flex justify-center items-center'
         style={{background:theme==='light'? 'orange':'brown'}}>
        <button className='text-gray border-x-2 border-y-2 rounded-md p-2 '
             onClick={togglecolor}>change color</button>
             
             <h2>  {user.username}</h2>
       </div>
        
       
    </>
  )
}

export default ChildC
