import React, { useState } from 'react'
import useData from './hooks/useData'

const Accordian = () => {
  
     const [data]=useData();
     const [selected,setSelected]=useState(null);
     const [enableMulti,setEnableMulti]=useState(false);
     const [multi,setMulti]=useState([]);

     function handleSingleAnswer(questionid){
        console.log(questionid);
        setSelected(questionid===selected?null:questionid);
        
     }

     function handleMultiSelection(questionid){
        let copymulti=[...multi];
        let index=copymulti.indexOf(questionid);

        if(index===-1)copymulti.push(questionid);
        else copymulti.splice(index,1);
        setMulti(copymulti)
     }
  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center'>
         <div className='w-2/4 flex flex-col gap-5 px-3 py-3'>
           <button
             className='px-2 py-1 bg-pink-600 w-fit rounded-md ml-20 text-white'
             onClick={()=>setEnableMulti(!enableMulti)}>{enableMulti ? 'Disable Multiple Selection':'Enable Multiple Selection'}</button>
            {
              data.map((dataitem)=>(
                <div key={dataitem.id} className=' bg-pink-600 px-3 py-2 text-white'>
                <div className='text-2xl text-white py-3 px-2 flex justify-between'
                onClick={enableMulti? ()=>handleMultiSelection(dataitem.id) :()=>handleSingleAnswer(dataitem.id)}
                >
                    <div className='inline'>{dataitem.Question}</div>
                    <span className='text-2xl px-4'>+</span>
                </div>
                <div>
                    {enableMulti ? multi.indexOf(dataitem.id)!==-1 && <div>{dataitem.Answer}</div>
                    :selected===dataitem.id ?<div>{dataitem.Answer}</div>:null}
                </div>
                </div>
                
              ))
            }
            

         </div>
      </div>
    </>
  )
}

export default Accordian
