import { useCallback, useEffect, useState } from 'react'
import { useRef } from 'react';
import './App.css'
import Parent from './Parent'

function App() {
    const [length,setLength]=useState(8);
    const [numbersAllowed,setNumbersAllowed]=useState(false);
    const [charactersAllowed,setCharactersAllowed]=useState(false);
    const [password,setPassword]=useState('');

    //useRef-hook
    const passwordRef=useRef(null);

    const passwordGenerator=useCallback(()=>{
      let pass='';
      let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

      if(numbersAllowed) str+='1234567890';
      if(charactersAllowed) str+='!~#@$%^&*_+=';

      for(let i=1;i<=length;i++){
        let char=Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(char);
      }
      setPassword(pass)
    },[numbersAllowed,charactersAllowed,length,setPassword])

    const copyToClipBoard=()=>{
      window.navigator.clipboard.writeText(password);
      passwordRef.current?.select();
    }
    useEffect(()=>{
      passwordGenerator()
    },[numbersAllowed,charactersAllowed,length,setPassword])

  return (
    <>
      <div className='w-screen h-screen flex justify-center text-yellow-400 flex-shrink-0'>
        <div className='w-3/6 h-44 bg-gray-800 mt-4 rounded-lg'>
        <div className='flex'>

        <input type="text"
        className='bg-white w-4/5 mt-10 ml-5 h-10 rounded-l-lg px-2 border-none outline-none font-medium text-orange-400 text-xl font-serif'
        value={password}
        readOnly 
        ref={passwordRef}/>

        <button className='bg-blue-600 mt-10 px-3 rounded-r-lg text-white'
        onClick={copyToClipBoard}>copy</button>
        </div>
        <div className='flex mt-8 px-3 gap-3'>
          <input type="range" id='101'
          min={8} max={15} 
          value={length}
          onChange={(e)=>setLength(e.target.value)}/>
          <label htmlFor="101" className=''>Length ({length})</label>

          <input type="checkbox" id='102'
          defaultChecked={numbersAllowed}
          onChange={()=>{
            setNumbersAllowed((prev)=>!prev)
          }}
          />
          <label htmlFor="102">NumbersAllowed</label>

          <input type="checkbox" id='103'
          defaultChecked={charactersAllowed}
          onChange={()=>{
            setCharactersAllowed((prev)=>!prev)
          }}/>
          <label htmlFor="103">CharactersAllowed</label>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
