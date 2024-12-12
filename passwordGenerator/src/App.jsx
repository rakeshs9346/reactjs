import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numbersAllowed,setNumbersAllowed]=useState(false);
  const [charactersAllowed,setCharactersAllowed]=useState(false);
  const [password,setPassword]=useState("");


  //useRef hook
  const passwordRef=useRef(null);

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numbersAllowed) str+="0123456789";
    if(charactersAllowed) str+="!@#$%^&*()_-+=[]{}`";  

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    setPassword(pass);
  },[length,numbersAllowed,charactersAllowed,setPassword]);
 
  const copyToClipBoard=useCallback(()=>{
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0,8)
    window.navigator.clipboard.writeText(password)
    
  },[password])

 useEffect(()=>{passwordGenerator()},
 [length,numbersAllowed,charactersAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-2 text-orange-400 bg-gray-700'>
        <h1 className='text-white text-center text-xl'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={password}
          className='outline-none border-none w-full py-1 px-3 bg-white'
          placeholder='password'
          readOnly
           ref={passwordRef}
          />

          <button 
          onClick={copyToClipBoard} 
          className='bg-blue-700 outline-none border-none text-white px-3 py-0.5 shrink-0 rounded-none'>copy</button>
        </div>
        
         <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={50} value={length} className='cursor-pointer' 
            onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={numbersAllowed}
            id='numberInput'
            onChange={()=>{
              setNumbersAllowed((prev)=>!prev);
            }}/>
            <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={charactersAllowed}
            id='charInput'
            onChange={()=>{
              setCharactersAllowed((prev)=>!prev);
            }}/>
            <label htmlFor="charInput">Characters</label></div>
         </div>
      </div>
      
    </>
  )
}

export default App
