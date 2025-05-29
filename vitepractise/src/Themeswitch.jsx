import React from 'react'
import useLocalStorage from './hooks/useLocalStorage'

function Themeswitch() {
    const [theme,setTheme]=useLocalStorage('theme','light')

    function toggleTheme(){
        setTheme(theme==='light' ? 'dark' :'light')
    }
  return (
    <div className={theme==='light' ? 'w-screen h-screen bg-white text-gray-700' :'w-screen h-screen bg-gray-800 text-white'}>
      <button onClick={toggleTheme}>change Theme</button>
    </div>
  )
}

export default Themeswitch
