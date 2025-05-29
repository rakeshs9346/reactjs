import { useState } from 'react'
import './App.css'
import UserContext from './context/UserContext';
import Login from './Login';


function App() {

   const [user,setUser]=useState({
      username:"",
      password:""
   })
   return(
    <UserContext.Provider value={{user,setUser}}>
      <Login/>
    </UserContext.Provider>
   )
}

export default App
