import React, { useEffect, useState } from 'react'

const RandomColor = () => {

    const [color,setColor]=useState('');
    const [rgbColor,setRgbColor]=useState(false);
    const [hexColor,setHexColor]=useState(false);
    const [typeOfColor,setTypeOfColor]=useState('rgb');
    const [RGB,setRGB]=useState(null);
    const [HEX,setHEX]=useState(null);
   
     function createHexColor(){
        let hex_array=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hex='#';

        for(let i=0;i<6;i++){
            hex+=hex_array[Math.floor(Math.random()*hex_array.length)];
        }
        setColor(hex);
       setHEX(hex);
     }
     function createRgbColor(){
        let red=Math.floor(Math.random()*255+1);
        let green=Math.floor(Math.random()*255+1);
        let blue=Math.floor(Math.random()*255+1);
        let rgb=`rgb(${red},${green},${blue})`
        setColor(rgb);
        
        setRGB(rgb)
        
     }
   
  return (
    <div className='w-screen h-screen flex items-center flex-col'
    style={{backgroundColor:`${color}`}}>

       <div className='flex gap-2 h-20 '>
        <button 
        className='px-2 py-1 h-9 border-blue-400 bg-slate-400 mt-2 rounded-md'
        onClick={()=>setTypeOfColor('hex')}>Create Hex Color</button>
        <button 
        onClick={()=>setTypeOfColor('rgb')}
        className='px-2 py-1 h-9 border-blue-400 bg-slate-400 mt-2 rounded-md'>Create RGB Color</button>
        <button 
        className='px-2 py-1 h-9 border-blue-400 bg-slate-400 mt-2 rounded-md'
        onClick={typeOfColor==='hex'?()=>createHexColor():()=>createRgbColor()}>Generate Random Color</button>
       </div>

       <div>
        <div className='text-6xl mb-11 py-2 px-3 mt-5' style={{fontWeight:'500'}}>{typeOfColor==='rgb'?'RGB COLOR':'HEX COLOR'}</div>
        <div className='text-6xl  px-3 mt-10 py-2' style={{fontWeight:'500'}}>{typeOfColor==='rgb'?RGB:HEX}</div>
       </div>
    </div>
  )
}

export default RandomColor
