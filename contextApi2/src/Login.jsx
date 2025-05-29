import React, { useContext, useState } from 'react'
import UserContext from './context/UserContext';

const Login = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const {user,setUser}=useContext(UserContext);
    const [users,setUsers]=useState([]);

    function handleClick(){
      console.log(user.username,":",user.password);
      setUsers(user.username);
      localStorage.setItem('username',user.username);
      setUsername("");
      setPassword("");
      
    }

    function handleUsername(e){
        let uname=e.target.value;
       setUsername(uname);
       setUser({...user,username:uname});
       
    }

    function handlePassword(e){
       let pass=e.target.value;
       setPassword(pass);
       setUser({...user,password:pass});
    }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <div className='w-2/5 h-3/5 bg-gray-600 text-white p-3 flex items-center justify-center flex-col gap-3'>
            <h1 className='text-2xl font-bold'>Login</h1>
            <div className='flex flex-col items-center gap-2'>
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                value={username}
                id='username'
                onChange={handleUsername} 
                className='border-1 outline-none rounded-md px-2 py-1'
                />
            </div>
            <div className='flex flex-col items-center gap-2'>
                <label htmlFor="password">password</label>
                <input 
                type="text" 
                value={password}
                id='password'
                onChange={handlePassword} 
                className='border-1 outline-none rounded-md px-2 py-1'
                />
            </div>
            <button 
            onClick={handleClick}
            className='px-3 py-1 bg-pink-600 rounded-md mt-2'>Login</button>
        </div>
    </div>
  )
}

export default Login
