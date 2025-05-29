import { useCallback, useEffect, useState,useRef } from 'react'
import './App.css'

function App() {
  
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password,setPassword] = useState('');

  const passwordRef=useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if(numberAllowed) str+="0123456789";
    if(charactersAllowed) str+="!@#$%^&*()_+";

    for(let i=0;i<length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    setPassword(pass)

  },[length,numberAllowed,charactersAllowed,setPassword])

  const copypasswordToClipBoard=useCallback(()=>{
    passwordRef.current?.select();
     window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,charactersAllowed,numberAllowed,passwordGenerator])

  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center bg-gray-950 '>
        
        <div className='max-w-md w-full bg-gray-700 flex items-center justify-center shadow-2xs p-4 flex-col rounded-lg'>
           <h1 className='text-white mb-3 text-2xl'>Password Generator</h1>

           <div className='flex w-full mb-3'>
           <input 
           type="text" 
           readOnly 
           value={password} 
           className='px-2 bg-white w-full border-none outline-none rounded-l-md py-1 text-orange-400 '
           ref={passwordRef}
           />

           <button 
           className='bg-blue-600 px-2 text-white py-1 rounded-r-md cursor-pointer'
           onClick={copypasswordToClipBoard}>copy</button>
           </div>
           <div className='flex gap-2 items-center justify-evenly text-orange-400'>
              <div className='flex gap-1 '>
                <input type="range" 
                min={8}
                max={30}
                value={length}
                onChange={(e)=>setLength(e.target.value)}
                />
                <label className='text-orange-400'>Length :{length}</label>
              </div>
              <div className='flex gap-1'>
                <input type="checkbox"
                 defaultChecked={numberAllowed}
                id='numberInput'
                 onChange={()=>{
                  setNumberAllowed((prev)=> !prev);
                 }} />
                 <label htmlFor="numberInput">Numbers</label>
              </div>
              <div className='flex gap-1'>
                <input type="checkbox"
                 defaultChecked={charactersAllowed}
                id='characterInput'
                 onChange={()=>{
                  setCharactersAllowed((prev)=> !prev);
                 }} />
                 <label htmlFor="characterInput">Characters</label>
              </div>
           </div>
           
        </div>
    
      </div>
     </>
  )
}

export default App
