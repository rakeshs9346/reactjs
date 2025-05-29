import React, { useState } from 'react'

const useData = () => {
    const data=[
        {
            id:1,
            title:'Accordian 1',
            info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
        },
        {
            id:2,
            title:'Accordian 2',
            info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
        },
        {
            id:3,
            title:'Accordian 3',
            info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
        },
        {
            id:4,
            title:'Accordian 4',
            info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.'
        }
    ]
    return [data]

}

function Accordian() {
    const [data]=useData()
    const [currentIndex, setCurrentIndex] = useState(null)

    function showDataInfo(dataid){
        if(currentIndex === dataid){
            setCurrentIndex(null)
        }else{
            setCurrentIndex(dataid)
        }

    }
  return (
    <div className='flex justify-center items-center flex-col h-screen bg-gray-400'>
      {data.map((item)=>(
        <div key={item.id} className='w-2/5 rounded-md my-2'>
            <div className='flex items-center justify-between px-4 py-2 bg-gray-200  rounded-md my-2' 
            onClick={()=>showDataInfo(item.id)}>
            <p>{item.title}</p>
            <span className='text-3xl px-2 cursor-pointer'
            onClick={()=>showDataInfo(item.id)}>+</span>
            </div>
            {currentIndex === item.id ? <div className='w-full p-3 bg-amber-400 rounded-md'>{item.info}</div> : null}
        </div>
      ))}
    </div>
  )
}

export default Accordian
