import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA';
import ChildC from './components/ChildC';

const userContext=createContext();
const ThemeContext=createContext();

function App() {
    const [user,setUser]=useState({username:'Rakesh Reddy'})
    const[theme,setTheme]=useState('light')
  return (
    <>
    <userContext.Provider value={{user}}>
    <ThemeContext.Provider value={{theme,setTheme}}>
      {/* <div className='w-screen h-screen flex justify-center items-center'
      style={{background:theme==='light'?'orange' :' blue'}}>
      <ChildA/>
      </div> */}
      <ChildC/>
      
    </ThemeContext.Provider>
    </userContext.Provider>
    
    {/* <userContext.Provider value={{user}}>
      <ChildA/>
    </userContext.Provider> */}
      
    </>
  )
}

export default App
export {ThemeContext}
export {userContext}
